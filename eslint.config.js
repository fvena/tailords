import eslintBrowser from "personal-style-guide/eslint/browser";

export default [
  ...eslintBrowser,
  {
    ignores: [
      "dist/**",
      "lib/**",
      ".vitepress/dist/**",
      "coverage/**",
      "node_modules/**",
      "packages/*/dist/**",
      "packages/*/lib/**",
      "packages/*/.vitepress/dist/**",
    ],
  },
];
