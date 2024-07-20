Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./lib",
  target: "node",
}).then(() => {
  console.log("Build complete!");
});
