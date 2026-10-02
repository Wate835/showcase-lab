import { api } from "./client";
import type { ChallengesResponse, Framework } from "../types";

export function fetchChallenges(framework: Framework) {
  return api<ChallengesResponse>(`/challenges?framework=${framework}`);
}

export function checkChallengeLine(
  challengeId: string,
  framework: Framework,
  line: number
) {
  return api<{ ok: boolean }>(`/challenges/${challengeId}/check-line`, {
    method: "POST",
    body: JSON.stringify({ framework, line }),
  });
}

export function checkChallengeFix(
  challengeId: string,
  framework: Framework,
  fixId: string
) {
  return api<{ ok: boolean }>(`/challenges/${challengeId}/check-fix`, {
    method: "POST",
    body: JSON.stringify({ framework, fix_id: fixId }),
  });
}
