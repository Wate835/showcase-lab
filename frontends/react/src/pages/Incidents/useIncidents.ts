import { useEffect, useRef, useState } from "react";
import { incidentsWsUrl, resolveIncident } from "../../api";
import type { Incident } from "../../types";
import { useI18n } from "../../utils/usePrefs";

export function useIncidents() {
  const [items, setItems] = useState<Incident[]>([]);
  const [leavingIds, setLeavingIds] = useState<number[]>([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [liveMode, setLiveMode] = useState("incidents.connecting");
  const leavingRef = useRef(leavingIds);
  leavingRef.current = leavingIds;
  const { locale } = useI18n();

  useEffect(() => {
    let closed = false;
    let socket: WebSocket | null = null;
    let retry: number | undefined;
    const dateLocale = locale === "en" ? "en-US" : "ru-RU";

    const connect = () => {
      setLiveMode("incidents.connecting");
      socket = new WebSocket(incidentsWsUrl());
      socket.onopen = () => setLiveMode("incidents.wsReady");
      socket.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type !== "snapshot") return;
          const open = (msg.items || []).filter((i: Incident) => !i.resolved);
          setItems((prev) => (leavingRef.current.length ? prev : open));
          setUpdatedAt(new Date().toLocaleTimeString(dateLocale));
        } catch {
          /* ignore */
        }
      };
      socket.onclose = () => {
        setLiveMode("incidents.reconnecting");
        if (!closed) retry = window.setTimeout(connect, 1500);
      };
      socket.onerror = () => setLiveMode("incidents.wsError");
    };

    connect();
    return () => {
      closed = true;
      if (retry) window.clearTimeout(retry);
      if (socket) {
        socket.onclose = null;
        socket.close();
      }
    };
  }, [locale]);

  async function resolveItem(id: number) {
    setLeavingIds((prev) => [...prev, id]);
    try {
      await resolveIncident(id);
    } catch {
      setLeavingIds((prev) => prev.filter((x) => x !== id));
      return;
    }
    window.setTimeout(() => {
      setItems((prev) => prev.filter((i) => i.id !== id));
      setLeavingIds((prev) => prev.filter((x) => x !== id));
    }, 380);
  }

  const visible = items.filter((i) => !i.resolved || leavingIds.includes(i.id));
  const openCount = items.filter((i) => !leavingIds.includes(i.id)).length;

  return { visible, openCount, liveMode, updatedAt, leavingIds, resolveItem };
}
