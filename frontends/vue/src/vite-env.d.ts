/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare module "@showcase-lab/photo-editor" {
  export { PhotoEditorShell } from "../../packages/photo-editor/src/index.ts";
  export { mountPhotoEditor, type PhotoEditorMount } from "../../packages/photo-editor/src/mount.ts";
}

declare module "@showcase-lab/photo-editor/style.css";
