import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: ["packages/studio", "packages/vitepress", "packages/ui"],
  },
});
