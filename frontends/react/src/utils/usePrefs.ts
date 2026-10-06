import { useCallback, useSyncExternalStore } from "react";
import {
  getLocale,
  setLocale,
  subscribeLocale,
  t as translate,
  toggleLocale,
} from "@shared/i18n.js";
import {
  getTheme,
  setTheme,
  subscribeTheme,
  toggleTheme,
} from "@shared/theme.js";

export function useI18n() {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => translate(key, vars),
    [locale]
  );
  return { locale, t, toggleLocale, setLocale };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getTheme);
  return { theme, toggleTheme, setTheme, isDark: theme === "dark" };
}
