/** Tiny inline-boot snippet twin — call from module entrypoints. */
import { initTheme } from "./theme.js";
import { initLocale } from "./i18n.js";

export function bootPrefs() {
  initTheme();
  initLocale();
}
