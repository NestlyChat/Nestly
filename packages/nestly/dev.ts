import { patchSveltekit, startDevServer } from "@eslym/sveltekit-adapter-bun";

await patchSveltekit();
await startDevServer();
