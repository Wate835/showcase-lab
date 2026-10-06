import { computed, onUnmounted, ref, watch } from "vue";
import {
  checkChallengeFix,
  checkChallengeLine,
  fetchChallenges,
  fetchScores,
  postScore,
} from "../../api";
import { FRAMEWORK } from "../../constants/framework";
import type { Challenge, Score } from "../../types";
import { showToast } from "../../utils/toast";
import { useI18n } from "../../utils/usePrefs";

export function useBugHunt() {
  const challenges = ref<Challenge[]>([]);
  const scores = ref<Score[]>([]);
  const playing = ref(false);
  const finished = ref(false);
  const index = ref(0);
  const foundLine = ref(false);
  const foundBugLine = ref<number | null>(null);
  const wrongLine = ref<number | null>(null);
  const checking = ref(false);
  const elapsed = ref(0);
  const player = ref("");
  const error = ref("");
  const { locale, t } = useI18n();
  let startedAt = 0;
  let tickId: number | undefined;

  const ch = computed(() => challenges.value[index.value]);

  async function load() {
    try {
      const data = await fetchChallenges(FRAMEWORK);
      challenges.value = data.items;
      scores.value = await fetchScores(FRAMEWORK);
    } catch (e) {
      error.value = e instanceof Error ? e.message : t("common.loadingError");
    }
  }

  function start() {
    playing.value = true;
    finished.value = false;
    index.value = 0;
    foundLine.value = false;
    foundBugLine.value = null;
    wrongLine.value = null;
    checking.value = false;
    startedAt = performance.now();
    elapsed.value = 0;
    window.clearInterval(tickId);
    tickId = window.setInterval(() => {
      elapsed.value = Math.floor(performance.now() - startedAt);
    }, 100);
  }

  async function onLineClick(n: number) {
    if (!playing.value || finished.value || foundLine.value || checking.value || !ch.value) return;
    checking.value = true;
    try {
      const { ok } = await checkChallengeLine(ch.value.id, FRAMEWORK, n);
      if (ok) {
        foundLine.value = true;
        foundBugLine.value = n;
        wrongLine.value = null;
      } else {
        wrongLine.value = n;
        showToast(t("bugs.wrongLine"));
        window.setTimeout(() => {
          wrongLine.value = null;
        }, 400);
      }
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("bugs.checkError"));
    } finally {
      checking.value = false;
    }
  }

  async function onFix(id: string) {
    if (!ch.value || checking.value) return;
    checking.value = true;
    try {
      const { ok } = await checkChallengeFix(ch.value.id, FRAMEWORK, id);
      if (!ok) {
        showToast(t("bugs.wrongFix"));
        return;
      }
      if (index.value >= challenges.value.length - 1) {
        elapsed.value = Math.floor(performance.now() - startedAt);
        window.clearInterval(tickId);
        playing.value = false;
        finished.value = true;
        return;
      }
      index.value += 1;
      foundLine.value = false;
      foundBugLine.value = null;
      wrongLine.value = null;
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("bugs.checkError"));
    } finally {
      checking.value = false;
    }
  }

  async function save() {
    const name = player.value.trim() || "anonymous";
    try {
      await postScore({ player_name: name, time_ms: elapsed.value, framework: FRAMEWORK });
      showToast(t("bugs.saved"));
      scores.value = await fetchScores(FRAMEWORK);
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("bugs.saveError"));
    }
  }

  watch(locale, load, { immediate: true });
  onUnmounted(() => window.clearInterval(tickId));

  return {
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
  };
}
