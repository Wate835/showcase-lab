import { useEffect, useRef, useState } from "react";
import { incidentsWsUrl, resolveIncident } from "../../api";
import type { Incident } from "../../types";

export function useIncidents() {
  const [items, setItems] = useState<Incident[]>([]);
  const [leavingIds, setLeavingIds] = useState<number[]>([]);
  const [updatedAt, setUpdatedAt] = useState("");
  const [liveMode, setLiveMode] = useState("подключение…");
  const leavingRef = useRef(leavingIds);
  leavingRef.current = leavingIds;

  useEffect(() => {
    let closed = false;
    let socket: WebSocket | null = null;
    let retry: number | undefined;

    const connect = () => {
      setLiveMode("подключение…");
      socket = new WebSocket(incidentsWsUrl());
      socket.onopen = () => setLiveMode("WebSocket");
      socket.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (msg.type !== "snapshot") return;
          const open = (msg.items || []).filter((i: Incident) => !i.resolved);
          setItems((prev) => (leavingRef.current.length ? prev : open));
          setUpdatedAt(new Date().toLocaleTimeString());
        } catch {
          /* ignore */
        }
      };
      socket.onclose = () => {
        setLiveMode("переподключение…");
        if (!closed) retry = window.setTimeout(connect, 1500);
      };
      socket.onerror = () => setLiveMode("ошибка WS");
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
  }, []);

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
