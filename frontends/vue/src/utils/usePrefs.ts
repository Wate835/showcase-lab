import { computed, ref } from "vue";
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

const locale = ref(getLocale());
const theme = ref(getTheme());
let subscribed = false;

function ensureSubscribed() {
  if (subscribed) return;
  subscribed = true;
  subscribeLocale(() => {
    locale.value = getLocale();
  });
  subscribeTheme(() => {
    theme.value = getTheme();
  });
}

export function useI18n() {
  ensureSubscribed();

  function t(key: string, vars?: Record<string, string | number>) {
    void locale.value;
    return translate(key, vars);
  }

  return {
    locale,
    t,
    toggleLocale,
    setLocale,
  };
}

export function useTheme() {
  ensureSubscribed();

  const isDark = computed(() => theme.value === "dark");

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
  };
}
