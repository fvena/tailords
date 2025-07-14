import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      tailords: path.resolve(__dirname, "../src"),
    },
  },
  build: {
    minify: false,
  },
});
