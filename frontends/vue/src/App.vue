<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import styles from "./app.module.css";
import { ROUTES } from "./constants/routes";
import { useI18n, useTheme } from "./utils/usePrefs";

const route = useRoute();
const { t, locale, toggleLocale } = useI18n();
const { theme, toggleTheme } = useTheme();

const navRoutes = computed(() =>
  ROUTES.map((r) => ({
    ...r,
    label: t(`nav.${r.name}`),
  }))
);

const themeLabel = computed(() =>
  theme.value === "dark" ? t("shell.themeToLight") : t("shell.themeToDark")
);
const localeLabel = computed(() =>
  locale.value === "ru" ? t("shell.localeToEn") : t("shell.localeToRu")
);
</script>

<template>
  <div :class="['shell', styles.shell]">
    <header class="topbar">
      <RouterLink :class="['logo', styles.logo]" :to="{ name: 'about' }">Showcase Lab</RouterLink>
      <nav :class="['nav', styles.nav]">
        <RouterLink
          v-for="r in navRoutes"
          :key="r.name"
          :to="{ name: r.name }"
          :class="{ active: route.name === r.name }"
        >
          {{ r.label }}
        </RouterLink>
      </nav>
      <div class="topbar-controls">
        <button
          type="button"
          :class="['switch', styles.switch]"
          :aria-label="t('shell.themeAria')"
          @click="toggleTheme"
        >
          {{ themeLabel }}
        </button>
        <button
          type="button"
          :class="['switch', styles.switch]"
          :aria-label="t('shell.localeAria')"
          @click="toggleLocale"
        >
          {{ localeLabel }}
        </button>
        <a :class="['switch', styles.switch]" href="/?choose=1">{{ t("shell.switchStack") }}</a>
      </div>
    </header>

    <main class="content">
      <RouterView v-slot="{ Component, route: r }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="r.path" />
        </Transition>
      </RouterView>
    </main>

    <footer class="footer">
      <span class="badge">Vue 3 · emerald</span>
      <span>{{ t("shell.footerApi") }}</span>
    </footer>
  </div>
</template>
