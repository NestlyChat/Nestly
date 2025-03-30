import { Database } from "bun:sqlite";

const db = new Database(":memory:", {
	create: true,
	strict: true
});

if (db.filename === ":memory:") {
	console.warn("DataBase is running in memory!");
}

db.run(
	`CREATE TABLE IF NOT EXISTS logins (
		login_id INTEGER PRIMARY KEY AUTOINCREMENT,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL,
		token TEXT NOT NULL
	)`
);

export default db;