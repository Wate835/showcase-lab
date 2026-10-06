import { api } from "./client";
import { getLocale } from "@shared/i18n.js";

export function resolveIncident(id: number) {
  return api(`/incidents/${id}/resolve`, { method: "POST" });
}

export function incidentsWsUrl() {
  const proto = location.protocol === "https:" ? "wss:" : "ws:";
  return `${proto}//${location.host}/api/ws/incidents?lang=${getLocale()}`;
}
