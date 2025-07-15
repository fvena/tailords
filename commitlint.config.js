export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0, "always"],
    "scope-enum": [
      2,
      "always",
      ["tokens", "studio", "vitepress", "theme", "ui", "docs", "ci", "deps"],
    ],
  },
};
