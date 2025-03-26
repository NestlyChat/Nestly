import { context } from "esbuild";

const ctx = await context({
	platform: "node",
	external: [
		"electron"
	],
	entryPoints: [
		{
			in: "src/main/index.ts",
			out: "main"
		},
		{
			in: "src/preload/index.ts",
			out: "preload"
		}
	],
	bundle: true,
	outdir: "./dist"
});

ctx.watch();