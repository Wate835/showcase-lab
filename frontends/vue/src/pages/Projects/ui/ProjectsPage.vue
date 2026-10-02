<script setup lang="ts">
import { useProjects } from "../useProjects";
import { useI18n } from "../../../utils/usePrefs";

const { projects, error } = useProjects();
const { t } = useI18n();
</script>

<template>
  <p v-if="error" class="error">{{ error }}</p>
  <section v-else>
    <h1>{{ t("projects.title") }}</h1>
    <p class="lead">{{ t("projects.lead") }}</p>
    <div class="stack">
      <article v-for="item in projects" :key="item.id" class="card">
        <h2>{{ item.title }}</h2>
        <p class="muted">{{ item.year }}</p>
        <p class="msg">{{ item.description }}</p>
        <p v-if="item.url" class="muted" style="margin-top: 0.75rem">
          <a :href="item.url" target="_blank" rel="noreferrer">{{ t("projects.openDemo") }}</a>
        </p>
        <div class="chip-row">
          <span v-for="tag in item.tags" :key="tag" class="chip">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
