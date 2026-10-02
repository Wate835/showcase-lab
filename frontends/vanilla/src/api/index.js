import { api } from "./client.js";
import { FRAMEWORK } from "../constants.js";

export { api };

export function fetchProfile() {
  return api("/profile");
}

export function fetchProjects() {
  return api("/projects");
}

export function fetchScores(limit = 10) {
  return api(`/scores?limit=${limit}&framework=${FRAMEWORK}`);
}

export function postScore(payload) {
  return api("/scores", { method: "POST", body: JSON.stringify(payload) });
}

export function fetchChallenges() {
  return api(`/challenges?framework=${FRAMEWORK}`);
}

export function checkChallengeLine(challengeId, line) {
  return api(`/challenges/${challengeId}/check-line`, {
    method: "POST",
    body: JSON.stringify({ framework: FRAMEWORK, line }),
  });
}

export function checkChallengeFix(challengeId, fixId) {
  return api(`/challenges/${challengeId}/check-fix`, {
    method: "POST",
    body: JSON.stringify({ framework: FRAMEWORK, fix_id: fixId }),
  });
}

export function fetchGuestbook() {
  return api("/guestbook");
}

export function postGuestbook(payload) {
  return api("/guestbook", { method: "POST", body: JSON.stringify(payload) });
}

export function resolveIncident(id) {
  return api(`/incidents/${id}/resolve`, { method: "POST" });
}

export function incidentsWsUrl() {
  const proto = location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${location.host}/api/ws/incidents`;
}
