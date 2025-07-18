import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  base: "/portfolio-vue-3/", // Nome do repositório GitHub
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
