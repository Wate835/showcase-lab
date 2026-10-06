import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [react(), vue({ include: [/\.vue$/] })],
  resolve: {
    dedupe: ["vue"],
    alias: {
      "@shared": fileURLToPath(new URL("../shared", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-konva", "konva", "@vueuse/core"],
  },
  base: "/app/react/",
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        ws: true,
      },
    },
  },
  build: {
    outDir: "../../static/react",
    emptyOutDir: true,
  },
});
