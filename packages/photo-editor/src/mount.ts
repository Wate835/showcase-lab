import { createApp, type App } from "vue";
import VueKonva from "vue-konva";

import { PhotoEditorShell } from "./shell";
import "./style.css";

export type PhotoEditorMount = {
  unmount: () => void;
  app: App;
};

export function mountPhotoEditor(container: HTMLElement): PhotoEditorMount {
  const app = createApp(PhotoEditorShell);
  app.use(VueKonva);
  app.mount(container);
  return {
    app,
    unmount: () => app.unmount(),
  };
}
