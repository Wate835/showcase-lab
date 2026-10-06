/// <reference types="vite/client" />

declare module "@showcase-lab/photo-editor/mount" {
  export function mountPhotoEditor(
    container: HTMLElement,
    options?: { locale?: "ru" | "en" },
  ): {
    unmount: () => void;
    setLocale: (locale: "ru" | "en") => void;
    app: import("vue").App;
  };
}

declare module "@showcase-lab/photo-editor/style.css";

declare module "@shared/*";
