import { useCallback, useEffect, useRef, useState } from "react";
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
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [scores, setScores] = useState<Score[]>([]);
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const [foundLine, setFoundLine] = useState(false);
  const [foundBugLine, setFoundBugLine] = useState<number | null>(null);
  const [wrongLine, setWrongLine] = useState<number | null>(null);
  const [checking, setChecking] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [player, setPlayer] = useState("");
  const [error, setError] = useState("");
  const startedAt = useRef(0);
  const { locale, t } = useI18n();

  const loadScores = useCallback(() => {
    fetchScores(FRAMEWORK).then(setScores).catch(() => undefined);
  }, []);

  useEffect(() => {
    fetchChallenges(FRAMEWORK)
      .then((d) => setChallenges(d.items))
      .catch((e: Error) => setError(e.message));
    loadScores();
  }, [loadScores, locale]);

  useEffect(() => {
    if (!playing || finished) return;
    const id = window.setInterval(() => {
      setElapsed(Math.floor(performance.now() - startedAt.current));
    }, 100);
    return () => clearInterval(id);
  }, [playing, finished]);

  const ch = challenges[index];

  function start() {
    setPlaying(true);
    setFinished(false);
    setIndex(0);
    setFoundLine(false);
    setFoundBugLine(null);
    setWrongLine(null);
    setChecking(false);
    startedAt.current = performance.now();
    setElapsed(0);
  }

  async function onLineClick(n: number) {
    if (!playing || finished || foundLine || checking || !ch) return;
    setChecking(true);
    try {
      const { ok } = await checkChallengeLine(ch.id, FRAMEWORK, n);
      if (ok) {
        setFoundLine(true);
        setFoundBugLine(n);
        setWrongLine(null);
      } else {
        setWrongLine(n);
        showToast(t("bugs.wrongLine"));
        window.setTimeout(() => setWrongLine(null), 400);
      }
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("bugs.checkError"));
    } finally {
      setChecking(false);
    }
  }

  async function onFix(id: string) {
    if (!ch || checking) return;
    setChecking(true);
    try {
      const { ok } = await checkChallengeFix(ch.id, FRAMEWORK, id);
      if (!ok) {
        showToast(t("bugs.wrongFix"));
        return;
      }
      if (index >= challenges.length - 1) {
        const ms = Math.floor(performance.now() - startedAt.current);
        setElapsed(ms);
        setPlaying(false);
        setFinished(true);
        return;
      }
      setIndex((i) => i + 1);
      setFoundLine(false);
      setFoundBugLine(null);
      setWrongLine(null);
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("bugs.checkError"));
    } finally {
      setChecking(false);
    }
  }

  async function save() {
    const name = player.trim() || "anonymous";
    try {
      await postScore({ player_name: name, time_ms: elapsed, framework: FRAMEWORK });
      showToast(t("bugs.saved"));
      loadScores();
    } catch (e) {
      showToast(e instanceof Error ? e.message : t("bugs.saveError"));
    }
  }

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
    setPlayer,
    error,
    ch,
    start,
    onLineClick,
    onFix,
    save,
  };
}
