import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tailords/",
  description:
    "TailorDS is a tool to build your own SCSS framework, empowering you to create, manage, and implement a Design System tailored to your project's needs.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: "/", text: "Home" },
      { link: "/markdown-examples", text: "Examples" },
    ],

    sidebar: [
      {
        items: [
          { link: "/markdown-examples", text: "Markdown Examples" },
          { link: "/api-examples", text: "Runtime API Examples" },
        ],
        text: "Examples",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/fvena/tailords" }],
  },
  title: "tailords",
});
