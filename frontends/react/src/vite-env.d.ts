/// <reference types="vite/client" />

declare module "@showcase-lab/photo-editor/mount" {
  export function mountPhotoEditor(container: HTMLElement): {
    unmount: () => void;
    app: import("vue").App;
  };
}

declare module "@showcase-lab/photo-editor/style.css";

declare module "@shared/*";
