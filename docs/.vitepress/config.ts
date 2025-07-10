import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tailords/",
  description:
    "TailorDS is a tool to build your own SCSS framework, empowering you to create, manage, and implement a Design System tailored to your project's needs.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/getting-started/" },
    ],

    sidebar: {
      "/": [
        { text: "Getting Started", link: "/getting-started/" },
        {
          text: "Design Foundations",
          items: [{ text: "Colors", link: "/foundations/colors" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/fvena/tailords" }],
  },
  title: "tailorDS - Design System",
});
