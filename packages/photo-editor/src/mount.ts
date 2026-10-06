import { createApp, ref, type App, type Ref } from "vue";
import VueKonva from "vue-konva";

import { getLocale, type HostLocale } from "./hostLocale";
import { PE_LOCALE_KEY } from "./i18n";
import { PhotoEditorShell } from "./shell";
import "./style.css";

export type PhotoEditorMount = {
  unmount: () => void;
  app: App;
  setLocale: (locale: HostLocale) => void;
};

function normalizeLocale(locale?: HostLocale | null): HostLocale {
  if (locale === "en" || locale === "ru") return locale;
  return getLocale();
}

export function mountPhotoEditor(
  container: HTMLElement,
  options: { locale?: HostLocale } = {},
): PhotoEditorMount {
  const localeRef: Ref<HostLocale> = ref(normalizeLocale(options.locale));
  const app = createApp(PhotoEditorShell);
  app.provide(PE_LOCALE_KEY, localeRef);
  app.use(VueKonva);
  app.mount(container);
  return {
    app,
    setLocale(locale: HostLocale) {
      localeRef.value = normalizeLocale(locale);
    },
    unmount: () => app.unmount(),
  };
}
