import editorConfig from "../../packages/photo-editor/tailwind.config.js";

/** @type {import('tailwindcss').Config} */
export default {
  ...editorConfig,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../../packages/photo-editor/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
};
