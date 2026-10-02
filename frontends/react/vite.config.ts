import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [react(), vue({ include: [/\.vue$/] })],
  resolve: {
    dedupe: ["vue"],
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
    outDir: "../../backend/static/react",
    emptyOutDir: true,
  },
});
