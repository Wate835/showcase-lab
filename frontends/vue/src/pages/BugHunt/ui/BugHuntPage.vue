<script setup lang="ts">
import { FRAMEWORK } from "../../../constants/framework";
import { formatTime } from "../../../utils/formatTime";
import { useBugHunt } from "../useBugHunt";

const {
  challenges,
  scores,
  playing,
  finished,
  index,
  foundLine,
  foundBugLine,
  wrongLine,
  checking,
  elapsed,
  player,
  error,
  ch,
  start,
  onLineClick,
  onFix,
  save,
} = useBugHunt();
</script>

<template>
  <section>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-else-if="!challenges.length" class="muted">Загрузка челленджей…</p>
    <template v-else>
      <h1>Bug Hunt</h1>
      <p class="lead">
        Найди и исправь {{ challenges.length }} классических багов Vue. Кликни по ошибочной строке,
        затем выбери фикс.
      </p>
      <div class="hunt-toolbar">
        <button class="btn" :disabled="playing && !finished" @click="start">
          {{ finished || !playing ? "Старт" : "В процессе…" }}
        </button>
        <span class="timer">{{ formatTime(playing || finished ? elapsed : 0) }}</span>
        <span class="muted">
          {{
            playing || finished
              ? `Баг ${Math.min(index + 1, challenges.length)} / ${challenges.length}`
              : "Готов?"
          }}
        </span>
      </div>
      <p v-if="ch && (playing || finished)" class="hunt-hint">
        <strong>Наблюдение:</strong> {{ ch.hint || ch.title }}
      </p>
      <p v-else class="hunt-hint">
        <strong>Как играть:</strong> короткий симптом — без спойлера. Найди строку и выбери фикс.
      </p>

      <div class="vscode">
        <div class="vscode-titlebar">
          <div class="vscode-dots"><span /><span /><span /></div>
          <span>{{ (playing || finished) && ch ? ch.file : "bug-hunt" }} — Showcase Lab</span>
        </div>
        <div class="vscode-body">
          <aside class="vscode-sidebar">
            <div class="side-label">Explorer</div>
            <button
              v-for="(c, i) in challenges"
              :key="c.id"
              type="button"
              class="vscode-file"
              :class="{
                current: (playing || finished) && i === index,
                done: (playing || finished) && i < index,
              }"
            >
              {{ c.file }}
            </button>
          </aside>
          <div class="vscode-main">
            <div class="vscode-tabs">
              <div class="vscode-tab">{{ (playing || finished) && ch ? ch.file : "ready" }}</div>
            </div>
            <div class="vscode-editor">
              <p v-if="!playing && !finished" class="muted" style="padding: 1rem">Нажми «Старт»</p>
              <div
                v-for="(line, i) in ch?.lines || []"
                v-else
                :key="i"
                class="vscode-line"
                :class="{
                  'is-found': foundLine && i + 1 === foundBugLine,
                  'is-bug': foundLine && i + 1 === foundBugLine,
                  'is-wrong': wrongLine === i + 1,
                }"
                @click="onLineClick(i + 1)"
              >
                <span class="vscode-gutter">{{ i + 1 }}</span>
                <span class="vscode-code">{{ line }}</span>
              </div>
            </div>
            <div v-if="playing && foundLine && ch && foundBugLine != null" class="fix-panel">
              <h3>Баг на строке {{ foundBugLine }}. Выбери исправление:</h3>
              <div class="fix-options">
                <button
                  v-for="f in ch.fixes"
                  :key="f.id"
                  type="button"
                  :disabled="checking"
                  @click="onFix(f.id)"
                >
                  {{ f.code }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="vscode-status">
          <span>{{ (playing || finished) && ch ? ch.file : "Bug Hunt" }}</span>
          <span>
            {{ FRAMEWORK }} ·
            {{
              playing || finished
                ? `#${Math.min(index + 1, challenges.length)}/${challenges.length}`
                : "ready"
            }}
          </span>
        </div>
      </div>

      <div v-if="finished" class="card" style="margin-top: 1rem">
        <h2>Все баги закрыты!</h2>
        <p class="lead">Время: <strong>{{ formatTime(elapsed) }}</strong></p>
        <div class="form" style="margin-top: 0.75rem">
          <label>
            Ник
            <input v-model="player" maxlength="40" placeholder="anonymous" />
          </label>
          <button class="btn" type="button" @click="save">Сохранить результат</button>
        </div>
      </div>

      <h2 style="margin-top: 1.5rem">Результаты (быстрее = лучше)</h2>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Игрок</th>
              <th>Время</th>
              <th>FW</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(s, i) in scores" :key="s.id">
              <td>{{ i + 1 }}</td>
              <td>{{ s.player_name }}</td>
              <td>{{ formatTime(s.time_ms) }}</td>
              <td>{{ s.framework }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </section>
</template>
