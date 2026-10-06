<script setup lang="ts">
import { useGuestbook } from "../useGuestbook";
import { useI18n } from "../../../utils/usePrefs";

const { entries, author, message, onSubmit } = useGuestbook();
const { t, locale } = useI18n();
</script>

<template>
  <section>
    <h1>{{ t("guestbook.title") }}</h1>
    <p class="lead">{{ t("guestbook.lead") }}</p>
    <form class="form card" @submit.prevent="onSubmit">
      <label>
        {{ t("guestbook.name") }}
        <input v-model="author" maxlength="40" required />
      </label>
      <label>
        {{ t("guestbook.message") }}
        <textarea v-model="message" rows="3" maxlength="500" required />
      </label>
      <button class="btn" type="submit">{{ t("guestbook.submit") }}</button>
    </form>
    <div class="stack" style="margin-top: 1rem">
      <article v-for="e in entries" :key="e.id" class="card">
        <strong>{{ e.author }}</strong>
        <span class="muted">
          · {{ e.framework }} ·
          {{ new Date(e.created_at).toLocaleString(locale === "en" ? "en-US" : "ru-RU") }}
        </span>
        <p class="msg">{{ e.message }}</p>
      </article>
    </div>
  </section>
</template>
