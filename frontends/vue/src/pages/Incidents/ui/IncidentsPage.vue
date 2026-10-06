<script setup lang="ts">
import { useIncidents } from "../useIncidents";
import { useI18n } from "../../../utils/usePrefs";

const { visible, openCount, liveMode, updatedAt, leavingIds, resolveItem } = useIncidents();
const { t } = useI18n();
</script>

<template>
  <section>
    <h1>{{ t("incidents.title") }}</h1>
    <p class="lead">
      {{ t("incidents.intro") }} {{ t("incidents.open") }} <strong>{{ openCount }}</strong>.
      {{ t("incidents.live") }}
      <strong>{{ t(liveMode) }}</strong> · {{ updatedAt }}
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
            {{ t("incidents.resolve") }}
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
