import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Importante: No usar additionalData para @use con configuración
        // additionalData solo funciona con @import
        api: "modern-compiler", // Usa el compilador moderno de Sass
      },
    },
  },
});
