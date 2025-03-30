import { json, type RequestHandler } from '@sveltejs/kit';
import db from "$lib/server/database";

interface Login {
	login_id: number;
	email: string;
	password: string;
	token: string;
}

const getLogin = db.query<Login, [email: string]>(
	`SELECT * FROM logins WHERE email = ?`
);
const insertLogin = db.query<void, [email: string, password: string, token: string]>(
	`INSERT INTO logins (email, password, token) VALUES (?, ?, ?)`
);

export const GET: RequestHandler = async ({ request }) => {
	const email = request.headers.get("email");
	const password = request.headers.get("password");

	if (typeof email === "string" && typeof password === "string") {
		const login = getLogin.get(email);

		if (!login) {
			return json({ status: 404, message: "Login not found!" }, { status: 404 });
		}

		if (!await Bun.password.verify(password, login.password)) {
			return json({ status: 404, message: "Password is not correct!" }, { status: 404 });
		}

		return json({ token: login.token }, { status: 200 });
	}


	return json({ status: 401, message: "Request is malformed" }, { status: 401 });
};
export const POST: RequestHandler = async ({ request }) => {
	const email = request.headers.get("email");
	const password = request.headers.get("password");

	if (typeof email === "string" && typeof password === "string") {
		if (getLogin.get(email)) {
			return json({ status: 401, message: "User already exists" }, { status: 401 });
		}

		const token = `${
			// Now
			Buffer.from(Date.now().toString(), "utf-8").toString("base64").slice(0, 10)
			}:${
			// Will be time of user create ?
			Buffer.from(Date.now().toString(), "utf-8").toString("base64").slice(6, 13)
			}:${(
				// Random
				await Bun.password.hash(Buffer.from(Date.now().toString(), "utf-8").toString("base64"))).slice(20, 40)
			}`;

		insertLogin.run(
			email,
			await Bun.password.hash(password),
			token
		);

		return json({ token }, { status: 200 });
	}

	return json({ status: 401, message: "Request is malformed" }, { status: 401 });
};
