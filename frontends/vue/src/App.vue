<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import styles from "./app.module.css";
import { ROUTES } from "./constants/routes";
import { useI18n, useTheme } from "./utils/usePrefs";

const route = useRoute();
const { t, locale, toggleLocale } = useI18n();
const { toggleTheme } = useTheme();
const navOpen = ref(false);
const pageMotion = ref(
  typeof window !== "undefined" ? window.matchMedia("(min-width: 860px)").matches : true
);
const desktopNavMq =
  typeof window !== "undefined" ? window.matchMedia("(min-width: 860px)") : null;

const navRoutes = computed(() =>
  ROUTES.map((r) => ({
    ...r,
    label: t(`nav.${r.name}`),
  }))
);

const localeLabel = computed(() =>
  locale.value === "en" ? t("shell.localeToEn") : t("shell.localeToRu")
);

const menuLabel = computed(() =>
  navOpen.value ? t("shell.menuClose") : t("shell.menuOpen")
);

function syncNavOpenClass(open: boolean) {
  document.documentElement.classList.toggle("is-nav-open", open);
}

function closeNav() {
  navOpen.value = false;
}

function toggleNav() {
  navOpen.value = !navOpen.value;
}

function onLogoClick() {
  if (route.name === "about") closeNav();
}

function onNavClick(name: string) {
  if (route.name === name) closeNav();
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") closeNav();
}

function onDesktopNavChange(event: MediaQueryListEvent) {
  pageMotion.value = event.matches;
  if (event.matches) closeNav();
}

watch(navOpen, (open) => {
  syncNavOpenClass(open);
});

watch(
  () => route.fullPath,
  () => {
    closeNav();
  }
);

onMounted(() => {
  syncNavOpenClass(navOpen.value);
  pageMotion.value = desktopNavMq?.matches ?? true;
  window.addEventListener("keydown", onKeydown);
  if (!desktopNavMq) return;
  if (typeof desktopNavMq.addEventListener === "function") {
    desktopNavMq.addEventListener("change", onDesktopNavChange);
  } else if (typeof desktopNavMq.addListener === "function") {
    desktopNavMq.addListener(onDesktopNavChange);
  }
});

onUnmounted(() => {
  syncNavOpenClass(false);
  window.removeEventListener("keydown", onKeydown);
  if (!desktopNavMq) return;
  if (typeof desktopNavMq.removeEventListener === "function") {
    desktopNavMq.removeEventListener("change", onDesktopNavChange);
  } else if (typeof desktopNavMq.removeListener === "function") {
    desktopNavMq.removeListener(onDesktopNavChange);
  }
});
</script>

<template>
  <div :class="['shell', styles.shell]">
    <header :class="['topbar', { 'is-nav-open': navOpen }]">
      <RouterLink :class="['logo', styles.logo]" :to="{ name: 'about' }" @click="onLogoClick">
        Showcase Lab
      </RouterLink>
      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="navOpen ? 'true' : 'false'"
        aria-controls="menu-panel"
        :aria-label="menuLabel"
        @click="toggleNav"
      >
        <span class="nav-toggle-bars" aria-hidden="true"></span>
      </button>
      <div id="menu-panel" class="menu-panel">
        <nav :class="['nav', styles.nav]">
          <RouterLink
            v-for="r in navRoutes"
            :key="r.name"
            :to="{ name: r.name }"
            :class="{ active: route.name === r.name }"
            @click="onNavClick(r.name)"
          >
            {{ r.label }}
          </RouterLink>
        </nav>
        <div class="topbar-controls">
          <button
            type="button"
            :class="['switch', 'switch--icon', styles.switch]"
            :aria-label="t('shell.themeAria')"
            :data-tip="t('shell.themeAria')"
            @click="toggleTheme"
          >
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
            </svg>
          </button>
          <button
            type="button"
            :class="['switch', styles.switch]"
            :aria-label="t('shell.localeAria')"
            @click="toggleLocale"
          >
            {{ localeLabel }}
          </button>
          <a
            :class="['switch', 'switch--icon', styles.switch]"
            href="/?choose=1"
            :aria-label="t('shell.switchStack')"
            :data-tip="t('shell.switchStack')"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 2 3 7l9 5 9-5-9-5z" />
              <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <main class="content">
      <RouterView v-slot="{ Component, route: r }">
        <Transition v-if="pageMotion" name="page" mode="out-in">
          <component :is="Component" :key="r.path" />
        </Transition>
        <component :is="Component" v-else :key="r.path" />
      </RouterView>
    </main>

    <footer class="footer">
      <span class="badge">Vue 3 · emerald</span>
      <span>{{ t("shell.footerApi") }}</span>
    </footer>
  </div>
</template>
