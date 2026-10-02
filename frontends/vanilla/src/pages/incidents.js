import { incidentsWsUrl, resolveIncident } from "../api/index.js";
import { escapeHtml } from "../utils/escapeHtml.js";

let incidentsSocket = null;

export function stopIncidentsLive() {
  if (incidentsSocket) {
    incidentsSocket.onclose = null;
    incidentsSocket.close();
    incidentsSocket = null;
  }
}

function renderIncidentCards(items) {
  return items
    .filter((item) => !item.resolved)
    .map(
      (item) => `
            <article class="card incident-card" data-id="${item.id}">
              <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:center">
                <div>
                  <span class="severity ${escapeHtml(item.severity)}">${escapeHtml(item.severity)}</span>
                  <h2 style="display:inline;margin-left:.5rem">${escapeHtml(item.title)}</h2>
                  <p class="muted">${escapeHtml(item.service)}</p>
                  <p class="msg">${escapeHtml(item.description)}</p>
                </div>
                <button class="btn" data-resolve="${item.id}">Resolve</button>
              </div>
            </article>`
    )
    .join("");
}

function bindResolveButtons() {
  document.querySelectorAll("[data-resolve]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-resolve");
      const card = btn.closest(".incident-card");
      btn.disabled = true;
      try {
        await resolveIncident(id);
      } catch (_) {
        btn.disabled = false;
        return;
      }
      if (!card) return;
      card.classList.add("is-leaving");
      const cleanup = () => {
        card.remove();
        const openEl = document.getElementById("incidentOpen");
        if (openEl) {
          openEl.textContent = String(
            document.querySelectorAll(".incident-card:not(.is-leaving)").length
          );
        }
      };
      card.addEventListener("transitionend", cleanup, { once: true });
      setTimeout(cleanup, 450);
    });
  });
}

function applyIncidentSnapshot(items) {
  const openItems = (items || []).filter((i) => !i.resolved);
  const list = document.getElementById("incidentList");
  const openEl = document.getElementById("incidentOpen");
  const updatedEl = document.getElementById("incidentUpdated");
  const modeEl = document.getElementById("incidentMode");
  if (openEl) openEl.textContent = String(openItems.length);
  if (updatedEl) updatedEl.textContent = new Date().toLocaleTimeString();
  if (modeEl) modeEl.textContent = "WebSocket";
  if (list && !list.querySelector(".incident-card.is-leaving")) {
    list.innerHTML = renderIncidentCards(openItems);
    bindResolveButtons();
  }
}

export async function renderIncidents(appEl, currentRoute) {
  stopIncidentsLive();
  appEl.innerHTML = `
      <section>
        <h1>Incident Board</h1>
        <p class="lead">Фейковый DevOps-монитор. Открыто: <strong id="incidentOpen">…</strong>.
          Live: <strong id="incidentMode">подключение…</strong> · <span id="incidentUpdated">—</span></p>
        <div class="stack" id="incidentList"><p class="muted">Ждём WebSocket…</p></div>
      </section>`;

  const socket = new WebSocket(incidentsWsUrl());
  incidentsSocket = socket;
  socket.onopen = () => {
    const modeEl = document.getElementById("incidentMode");
    if (modeEl) modeEl.textContent = "WebSocket";
  };
  socket.onmessage = (ev) => {
    try {
      const msg = JSON.parse(ev.data);
      if (msg.type === "snapshot") applyIncidentSnapshot(msg.items || []);
    } catch (_) {
      /* ignore */
    }
  };
  socket.onclose = () => {
    if (currentRoute() !== "incidents") return;
    const modeEl = document.getElementById("incidentMode");
    if (modeEl) modeEl.textContent = "переподключение…";
    setTimeout(() => {
      if (currentRoute() === "incidents") renderIncidents(appEl, currentRoute);
    }, 1500);
  };
  socket.onerror = () => {
    const modeEl = document.getElementById("incidentMode");
    if (modeEl) modeEl.textContent = "ошибка WS";
  };
}
