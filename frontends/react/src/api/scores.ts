import { api } from "./client";
import type { Framework, Score } from "../types";

export function fetchScores(framework: Framework, limit = 10) {
  return api<Score[]>(`/scores?limit=${limit}&framework=${framework}`);
}

export function postScore(payload: {
  player_name: string;
  time_ms: number;
  framework: Framework;
}) {
  return api("/scores", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
