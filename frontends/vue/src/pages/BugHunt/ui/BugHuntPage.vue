<script setup lang="ts">
import { FRAMEWORK } from "../../../constants/framework";
import { formatTime } from "../../../utils/formatTime";
import { useI18n } from "../../../utils/usePrefs";
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

const { t } = useI18n();
</script>

<template>
  <section>
    <p v-if="error" class="error" role="alert" aria-live="polite">{{ error }}</p>
    <p v-else-if="!challenges.length" class="muted">{{ t("bugs.loading") }}</p>
    <template v-else>
      <h1>{{ t("bugs.title") }}</h1>
      <p class="lead">
        {{ t("bugs.lead", { count: challenges.length, framework: "Vue" }) }}
      </p>
      <div class="hunt-toolbar">
        <button class="btn" :disabled="playing && !finished" @click="start">
          {{ finished || !playing ? t("bugs.start") : t("bugs.inProgress") }}
        </button>
        <span class="timer">{{ formatTime(playing || finished ? elapsed : 0) }}</span>
        <span class="muted">
          {{
            playing || finished
              ? t("bugs.bugProgress", {
                  current: Math.min(index + 1, challenges.length),
                  total: challenges.length,
                })
              : t("bugs.ready")
          }}
        </span>
      </div>
      <p v-if="ch && (playing || finished)" class="hunt-hint">
        <strong>{{ t("bugs.observation") }}</strong> {{ ch.hint || ch.title }}
      </p>
      <p v-else class="hunt-hint">
        <strong>{{ t("bugs.howToPlay") }}</strong> {{ t("bugs.howToPlayBody") }}
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
              <p v-if="!playing && !finished" class="muted" style="padding: 1rem">
                {{ t("bugs.pressStart") }}
              </p>
              <button
                v-for="(line, i) in ch?.lines || []"
                v-else
                :key="i"
                type="button"
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
              </button>
            </div>
            <div v-if="playing && foundLine && ch && foundBugLine != null" class="fix-panel">
              <h3>{{ t("bugs.fixPrompt", { line: foundBugLine }) }}</h3>
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
        <h2>{{ t("bugs.allFixed") }}</h2>
        <p class="lead">{{ t("bugs.time") }} <strong>{{ formatTime(elapsed) }}</strong></p>
        <div class="form" style="margin-top: 0.75rem">
          <label>
            {{ t("bugs.nick") }}
            <input v-model="player" maxlength="40" :placeholder="t('bugs.nickPlaceholder')" />
          </label>
          <button class="btn" type="button" @click="save">{{ t("bugs.saveScore") }}</button>
        </div>
      </div>

      <h2 style="margin-top: 1.5rem">{{ t("bugs.results") }}</h2>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>{{ t("bugs.colPlayer") }}</th>
              <th>{{ t("bugs.colTime") }}</th>
              <th>{{ t("bugs.colFw") }}</th>
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
