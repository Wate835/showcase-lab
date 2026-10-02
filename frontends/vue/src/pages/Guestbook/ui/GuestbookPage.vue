<script setup lang="ts">
import { useGuestbook } from "../useGuestbook";

const { entries, author, message, onSubmit } = useGuestbook();
</script>

<template>
  <section>
    <h1>Guestbook</h1>
    <p class="lead">Оставь след. Сообщение пишется в SQLite.</p>
    <form class="form card" @submit.prevent="onSubmit">
      <label>
        Имя
        <input v-model="author" maxlength="40" required />
      </label>
      <label>
        Сообщение
        <textarea v-model="message" rows="3" maxlength="500" required />
      </label>
      <button class="btn" type="submit">Отправить</button>
    </form>
    <div class="stack" style="margin-top: 1rem">
      <article v-for="e in entries" :key="e.id" class="card">
        <strong>{{ e.author }}</strong>
        <span class="muted"> · {{ e.framework }} · {{ new Date(e.created_at).toLocaleString() }}</span>
        <p class="msg">{{ e.message }}</p>
      </article>
    </div>
  </section>
</template>
