export type HostLocale = "ru" | "en";

const STORAGE_KEY = "showcase-locale";
const listeners = new Set<() => void>();
let observing = false;
let override: HostLocale | null = null;

function fromDom(): HostLocale | null {
  const lang = document.documentElement.getAttribute("lang");
  if (lang === "en" || lang === "ru") return lang;
  return null;
}

function fromStorage(): HostLocale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ru") return stored;
  } catch {
    /* ignore */
  }
  return null;
}

function readLocale(): HostLocale {
  if (override === "en" || override === "ru") return override;
  return fromStorage() || fromDom() || "ru";
}

function notify() {
  listeners.forEach((fn) => fn());
}

function ensureObserver() {
  if (observing || typeof MutationObserver === "undefined") return;
  observing = true;
  const obs = new MutationObserver(() => notify());
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  window.addEventListener("showcase-locale", () => notify());
}

export function setHostLocale(locale: HostLocale | null) {
  override = locale === "en" || locale === "ru" ? locale : null;
  notify();
}

export function getLocale(): HostLocale {
  return readLocale();
}

export function subscribeLocale(cb: () => void) {
  ensureObserver();
  listeners.add(cb);
  return () => listeners.delete(cb);
}
