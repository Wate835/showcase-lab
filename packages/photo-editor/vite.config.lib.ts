import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    outDir: resolve(__dirname, "../../static/photo-editor"),
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: "esbuild",
    lib: {
      entry: resolve(__dirname, "src/mount.ts"),
      formats: ["es"],
      fileName: () => "mount.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: "style.css",
      },
    },
  },
});
