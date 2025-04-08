import { patchSveltekit, startDevServer } from "@eslym/sveltekit-adapter-bun";

await patchSveltekit();

const port = Number(process.env.PORT || 5173);

console.log = new Proxy(console.log, {
	apply(target, thisArg, argArray) {
		if (argArray.length === 1 && argArray[0] === `Serving on http://0.0.0.0:${port}/`) {
			target.apply(thisArg, [
				`Serving on http://localhost:${port}/`
			]);

			console.log = target;
			return 
		}

		return target.apply(thisArg, argArray);
	},
})

await startDevServer({
	host: "0.0.0.0",
	port
});