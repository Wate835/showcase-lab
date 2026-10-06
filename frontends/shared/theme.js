const STORAGE_KEY = "showcase-theme";
const listeners = new Set();

export const THEMES = /** @type {const} */ (["light", "dark"]);

/** @returns {"light" | "dark"} */
export function detectTheme() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

/** @returns {"light" | "dark"} */
export function getTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  const fromDom = document.documentElement.getAttribute("data-theme");
  if (fromDom === "light" || fromDom === "dark") return fromDom;
  return detectTheme();
}

/** @param {"light" | "dark"} theme */
export function setTheme(theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  document.documentElement.style.colorScheme = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  listeners.forEach((fn) => fn());
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

/** Apply stored/default theme before first paint when possible. */
export function initTheme() {
  setTheme(getTheme());
}

/** @param {() => void} cb */
export function subscribeTheme(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
