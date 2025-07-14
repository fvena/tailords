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
      { text: "Documentation", link: "/docs/getting-started/" },
      { text: "Guides", link: "/guides/" },
    ],

    sidebar: {
      "/docs/": [
        { text: "Vision", link: "/docs/vision" },
        { text: "Getting Started", link: "/docs/getting-started" },
        {
          text: "Foundations",
          items: [
            { text: "Colors", link: "/docs/colors" },
            // Espacio para spacing, typography más adelante
          ],
        },
      ],

      "/guides/": [
        {
          text: "Guides",
          items: [
            { text: "Build Colors", link: "/guides/build-colors" },
            // Espacio para spacing, typography más adelante
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/fvena/tailords" }],
  },
  title: "tailorDS",
});
