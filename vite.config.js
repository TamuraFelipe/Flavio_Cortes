import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
    }),
  ],
  base: "./",
});
