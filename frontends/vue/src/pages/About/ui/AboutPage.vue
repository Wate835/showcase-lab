<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useAbout } from "../useAbout";
import { useI18n } from "../../../utils/usePrefs";

const { profile, cases, error } = useAbout();
const { t } = useI18n();

function isInternalDemo(url: string | null | undefined): url is string {
  return Boolean(url && url.startsWith("/") && !url.startsWith("//"));
}
</script>

<template>
  <p v-if="error" class="error">{{ error }}</p>
  <p v-else-if="!profile" class="muted">{{ t("about.loading") }}</p>
  <section v-else>
    <h1>{{ profile.name }}</h1>
    <p class="lead">{{ profile.title }} · {{ profile.city }}</p>
    <p class="lead">{{ profile.summary }}</p>
    <div class="chip-row">
      <span v-for="s in profile.skills" :key="s" class="chip">{{ s }}</span>
    </div>
    <div class="card">
      <h2>{{ t("about.me") }}</h2>
      <p class="msg">{{ profile.about }}</p>
      <p class="muted" style="margin-top: 1rem">
        <a :href="profile.telegram" target="_blank" rel="noreferrer">Telegram</a> ·
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a> ·
        <a :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </div>
    <div class="stack" style="margin-top: 1rem">
      <article v-for="job in profile.experience" :key="job.company + job.period" class="card">
        <h2>{{ job.company }} — {{ job.role }}</h2>
        <p class="muted">{{ job.period }}</p>
        <ul>
          <li v-for="h in job.highlights" :key="h">{{ h }}</li>
        </ul>
      </article>
    </div>
    <div v-if="cases.length" class="cases">
      <h2>{{ t("about.cases") }}</h2>
      <p class="lead">{{ t("about.casesLead") }}</p>
      <div class="stack">
        <article v-for="item in cases" :key="item.id" class="card">
          <h2>
            <RouterLink v-if="isInternalDemo(item.url)" :to="item.url">{{ item.title }}</RouterLink>
            <a
              v-else-if="item.url"
              :href="item.url"
              target="_blank"
              rel="noreferrer"
            >{{ item.title }}</a>
            <template v-else>{{ item.title }}</template>
          </h2>
          <p class="muted">{{ item.year }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
