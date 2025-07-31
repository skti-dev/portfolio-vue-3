import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  base: "/portfolio-vue-3/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
