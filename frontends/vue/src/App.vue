<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import styles from "./app.module.css";
import { ROUTES } from "./constants/routes";

const route = useRoute();
</script>

<template>
  <div :class="['shell', styles.shell]">
    <header class="topbar">
      <RouterLink :class="['logo', styles.logo]" :to="{ name: 'about' }">Showcase Lab</RouterLink>
      <nav :class="['nav', styles.nav]">
        <RouterLink
          v-for="r in ROUTES"
          :key="r.name"
          :to="{ name: r.name }"
          :class="{ active: route.name === r.name }"
        >
          {{ r.label }}
        </RouterLink>
      </nav>
      <a :class="['switch', styles.switch]" href="/?choose=1">Сменить стек</a>
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
      <span>API: FastAPI + SQLAlchemy</span>
    </footer>
  </div>
</template>
