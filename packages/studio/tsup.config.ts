import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  external: ["@tailords/core"],
  format: ["esm", "cjs"],
  sourcemap: true,
});
