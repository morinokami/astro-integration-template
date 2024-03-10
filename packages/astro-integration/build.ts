// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
await Bun.build({
	entrypoints: ["./src/index.ts"],
	outdir: "./dist",
	target: "node",
	format: "esm",
	sourcemap: "external",
});
