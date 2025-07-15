import { defineConfig } from "vitepress";
import tokensConfig from "../../packages/tokens/docs/_config";
import studioConfig from "../../packages/studio/docs/_config";
import themeConfig from "../../packages/theme/docs/_config";
import uiConfig from "../../packages/ui/docs/_config";
import vitepressConfig from "../../packages/vitepress/docs/_config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/tailords/",
  description: "Build your own Design System with complete customization freedom",

  // Multi-package routing
  rewrites: {
    "docs/:slug*": ":slug*",
    "packages/:pkg/docs/:slug*": ":pkg/:slug*",
  },

  srcDir: "../",

  srcExclude: ["**/README.md"],
  themeConfig: {
    // Footer
    footer: {
      copyright: "Copyright © 2025 Francisco Vena",
      message: "Released under the MIT License",
    },
    logo: "/logo.svg",

    // Main navigation
    nav: [
      { link: "/", text: "Home" },
      { link: "/getting-started", text: "Getting Started" },
      {
        items: [
          { link: "/tokens/", text: "Tokens" },
          { link: "/studio/", text: "Studio" },
          { link: "/theme/", text: "Theme" },
          { link: "/ui/", text: "UI Components" },
          { link: "/vitepress/", text: "VitePress" },
        ],
        text: "Packages",
      },
    ],

    // Search
    search: {
      provider: "local",
    },

    // Dynamic sidebar per section
    sidebar: {
      // Default sidebar for root pages
      "/": [
        {
          items: [
            { link: "/getting-started", text: "Introduction" },
            { link: "/installation", text: "Installation" },
          ],
          text: "Getting Started",
        },
        {
          items: [
            { link: "/tokens/", text: "Tokens" },
            { link: "/studio/", text: "Studio" },
            { link: "/theme/", text: "Theme" },
            { link: "/ui/", text: "UI Components" },
            { link: "/vitepress/", text: "VitePress" },
          ],
          text: "Packages",
        },
      ],
      "/studio/": studioConfig.sidebar,
      "/theme/": themeConfig.sidebar,
      "/tokens/": tokensConfig.sidebar,
      "/ui/": uiConfig.sidebar,
      "/vitepress/": vitepressConfig.sidebar,
    },

    siteTitle: "TailorDS",

    socialLinks: [{ icon: "github", link: "https://github.com/fvena/tailords" }],
  },

  title: "TailorDS",
});
