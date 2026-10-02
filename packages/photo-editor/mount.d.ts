import type { App } from "vue";

export type PhotoEditorMount = {
  unmount: () => void;
  app: App;
};

export declare function mountPhotoEditor(container: HTMLElement): PhotoEditorMount;
