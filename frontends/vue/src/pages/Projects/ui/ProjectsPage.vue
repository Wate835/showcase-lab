<script setup lang="ts">
import { useProjects } from "../useProjects";

const { projects, error } = useProjects();
</script>

<template>
  <p v-if="error" class="error">{{ error }}</p>
  <section v-else>
    <h1>Projects</h1>
    <p class="lead">Проекты и кейсы из опыта.</p>
    <div class="stack">
      <article v-for="item in projects" :key="item.id" class="card">
        <h2>{{ item.title }}</h2>
        <p class="muted">{{ item.year }}</p>
        <p class="msg">{{ item.description }}</p>
        <p v-if="item.url" class="muted" style="margin-top: 0.75rem">
          <a :href="item.url" target="_blank" rel="noreferrer">Открыть демо</a>
        </p>
        <div class="chip-row">
          <span v-for="t in item.tags" :key="t" class="chip">{{ t }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
