import { computed, onMounted, onUnmounted, ref } from "vue";
import { incidentsWsUrl, resolveIncident as resolveIncidentApi } from "../../api";
import type { Incident } from "../../types";

export function useIncidents() {
  const incidents = ref<Incident[]>([]);
  const leavingIds = ref<number[]>([]);
  const updatedAt = ref("");
  const liveMode = ref("подключение…");
  let socket: WebSocket | null = null;
  let retry: number | undefined;
  let closed = false;

  function stop() {
    if (retry) window.clearTimeout(retry);
    retry = undefined;
    if (socket) {
      socket.onclose = null;
      socket.close();
      socket = null;
    }
  }

  function connect() {
    stop();
    liveMode.value = "подключение…";
    socket = new WebSocket(incidentsWsUrl());
    socket.onopen = () => {
      liveMode.value = "WebSocket";
    };
    socket.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        if (msg.type !== "snapshot") return;
        if (leavingIds.value.length) {
          updatedAt.value = new Date().toLocaleTimeString();
          return;
        }
        incidents.value = (msg.items || []).filter((i: Incident) => !i.resolved);
        updatedAt.value = new Date().toLocaleTimeString();
      } catch {
        /* ignore */
      }
    };
    socket.onclose = () => {
      liveMode.value = "переподключение…";
      if (!closed) retry = window.setTimeout(connect, 1500);
    };
    socket.onerror = () => {
      liveMode.value = "ошибка WS";
    };
  }

  async function resolveItem(id: number) {
    leavingIds.value = [...leavingIds.value, id];
    try {
      await resolveIncidentApi(id);
    } catch {
      leavingIds.value = leavingIds.value.filter((x) => x !== id);
      return;
    }
    window.setTimeout(() => {
      incidents.value = incidents.value.filter((i) => i.id !== id);
      leavingIds.value = leavingIds.value.filter((x) => x !== id);
    }, 380);
  }

  const visible = computed(() =>
    incidents.value.filter((i) => !i.resolved || leavingIds.value.includes(i.id))
  );
  const openCount = computed(
    () => incidents.value.filter((i) => !leavingIds.value.includes(i.id)).length
  );

  onMounted(connect);
  onUnmounted(() => {
    closed = true;
    stop();
  });

  return { visible, openCount, liveMode, updatedAt, leavingIds, resolveItem };
}
