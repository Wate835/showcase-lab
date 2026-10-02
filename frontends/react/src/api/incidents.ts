import { api } from "./client";

export function resolveIncident(id: number) {
  return api(`/incidents/${id}/resolve`, { method: "POST" });
}

export function incidentsWsUrl() {
  const proto = location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${location.host}/api/ws/incidents`;
}
