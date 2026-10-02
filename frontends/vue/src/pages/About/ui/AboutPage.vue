<script setup lang="ts">
import { useAbout } from "../useAbout";

const { profile, error } = useAbout();
</script>

<template>
  <p v-if="error" class="error">{{ error }}</p>
  <p v-else-if="!profile" class="muted">Загрузка профиля…</p>
  <section v-else>
    <h1>{{ profile.name }}</h1>
    <p class="lead">{{ profile.title }} · {{ profile.city }}</p>
    <p class="lead">{{ profile.summary }}</p>
    <div class="chip-row">
      <span v-for="s in profile.skills" :key="s" class="chip">{{ s }}</span>
    </div>
    <div class="card">
      <h2>Обо мне</h2>
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
  </section>
</template>
