<script setup lang="ts">
import { useIncidents } from "../useIncidents";

const { visible, openCount, liveMode, updatedAt, leavingIds, resolveItem } = useIncidents();
</script>

<template>
  <section>
    <h1>Incident Board</h1>
    <p class="lead">
      Фейковый DevOps-монитор. Открыто: <strong>{{ openCount }}</strong>. Live:
      <strong>{{ liveMode }}</strong> · {{ updatedAt }}
    </p>
    <div class="stack">
      <article
        v-for="item in visible"
        :key="item.id"
        class="card incident-card"
        :class="{ 'is-leaving': leavingIds.includes(item.id) }"
      >
        <div class="row">
          <div>
            <span class="severity" :class="item.severity">{{ item.severity }}</span>
            <h2 style="display: inline; margin-left: 0.5rem">{{ item.title }}</h2>
            <p class="muted">{{ item.service }}</p>
            <p class="msg">{{ item.description }}</p>
          </div>
          <button class="btn" :disabled="leavingIds.includes(item.id)" @click="resolveItem(item.id)">
            Resolve
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
