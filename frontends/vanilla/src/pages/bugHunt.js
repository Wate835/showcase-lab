import { t } from "/app/shared/i18n.js";
import { checkChallengeFix, checkChallengeLine, fetchChallenges, fetchScores, postScore } from "../api/index.js";
import { FRAMEWORK } from "../constants.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { formatTime } from "../utils/formatTime.js";
import { showToast } from "../utils/toast.js";

let huntSession = null;
let huntGen = 0;

export function stopBugHunt() {
  huntGen += 1;
  huntSession?.stopTick();
  huntSession = null;
}

export function applyBugHuntLocale() {
  huntSession?.onLocale();
}

export async function renderBugHunt(appEl) {
  stopBugHunt();
  const gen = huntGen;
  appEl.innerHTML = `<p class="muted">${escapeHtml(t("bugs.loading"))}</p>`;
  let challenges = [];
  let scores = [];
  try {
    const data = await fetchChallenges();
    challenges = data.items;
    scores = await fetchScores();
  } catch (err) {
    if (gen !== huntGen) return;
    appEl.innerHTML = `<p class="error">${escapeHtml(err.message)}</p>`;
    return;
  }
  if (gen !== huntGen) return;

  let playing = false;
  let finished = false;
  let index = 0;
  let startedAt = 0;
  let nowMs = 0;
  let tickId = null;
  let foundLine = false;
  let foundBugLine = null;
  let wrongLine = null;
  let checking = false;
  let player = "";

  function current() {
    return challenges[index];
  }

  function stopTick() {
    if (tickId) clearInterval(tickId);
    tickId = null;
  }

  function paintScores() {
    const box = document.getElementById("huntScores");
    if (!box) return;
    box.innerHTML = `
      <table class="table">
        <thead><tr><th>#</th><th>${escapeHtml(t("bugs.colPlayer"))}</th><th>${escapeHtml(t("bugs.colTime"))}</th><th>${escapeHtml(t("bugs.colFw"))}</th></tr></thead>
        <tbody>
          ${scores
            .map(
              (s, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${escapeHtml(s.player_name)}</td>
              <td>${formatTime(s.time_ms)}</td>
              <td>${escapeHtml(s.framework)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>`;
  }

  function paint() {
    const ch = current();
    const elapsed = playing || finished ? nowMs : 0;
    const files = challenges
      .map((c, i) => {
        const cls = [i === index ? "current" : "", i < index ? "done" : ""]
          .filter(Boolean)
          .join(" ");
        return `<button type="button" class="vscode-file ${cls}">${escapeHtml(c.file)}</button>`;
      })
      .join("");

    let fixPanel = "";
    if (playing && foundLine && ch && foundBugLine != null) {
      fixPanel = `
        <div class="fix-panel">
          <h3>${escapeHtml(t("bugs.fixPrompt", { line: foundBugLine }))}</h3>
          <div class="fix-options">
            ${ch.fixes
              .map(
                (f) =>
                  `<button type="button" data-fix="${escapeHtml(f.id)}" ${checking ? "disabled" : ""}>${escapeHtml(f.code)}</button>`
              )
              .join("")}
          </div>
        </div>`;
    }

    let finishPanel = "";
    if (finished) {
      finishPanel = `
        <div class="card" style="margin-top:1rem">
          <h2>${escapeHtml(t("bugs.allFixed"))}</h2>
          <p class="lead">${escapeHtml(t("bugs.time"))} <strong>${formatTime(elapsed)}</strong></p>
          <div class="form" style="margin-top:.75rem">
            <label>${escapeHtml(t("bugs.nick"))} <input id="huntPlayer" maxlength="40" placeholder="${escapeHtml(t("bugs.nickPlaceholder"))}" value="${escapeHtml(player)}" /></label>
            <button class="btn" id="huntSave" type="button">${escapeHtml(t("bugs.saveScore"))}</button>
          </div>
        </div>`;
    }

    const active = playing || finished;
    const linesHtml =
      active && ch
        ? ch.lines
            .map((line, i) => {
              const n = i + 1;
              const cls = [
                "vscode-line",
                foundLine && n === foundBugLine ? "is-found is-bug" : "",
                wrongLine === n ? "is-wrong" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return `<div class="${cls}" data-line="${n}"><span class="vscode-gutter">${n}</span><span class="vscode-code">${escapeHtml(line)}</span></div>`;
            })
            .join("")
        : "";

    const progress = playing || finished
      ? escapeHtml(
          t("bugs.bugProgress", {
            current: Math.min(index + 1, challenges.length),
            total: challenges.length,
          })
        )
      : escapeHtml(t("bugs.ready"));

    appEl.innerHTML = `
      <section>
        <h1>${escapeHtml(t("bugs.title"))}</h1>
        <p class="lead">${escapeHtml(t("bugs.lead", { count: challenges.length, framework: FRAMEWORK }))}</p>
        <div class="hunt-toolbar">
          <button class="btn" id="huntStart" ${playing && !finished ? "disabled" : ""}>${escapeHtml(finished || !playing ? t("bugs.start") : t("bugs.inProgress"))}</button>
          <span class="timer" id="huntTimer">${formatTime(elapsed)}</span>
          <span class="muted">${progress}</span>
        </div>
        ${
          ch && (playing || finished)
            ? `<p class="hunt-hint"><strong>${escapeHtml(t("bugs.observation"))}</strong> ${escapeHtml(ch.hint || ch.title)}</p>`
            : `<p class="hunt-hint"><strong>${escapeHtml(t("bugs.howToPlay"))}</strong> ${escapeHtml(t("bugs.howToPlayBody"))}</p>`
        }
        <div class="vscode">
          <div class="vscode-titlebar">
            <div class="vscode-dots"><span></span><span></span><span></span></div>
            <span>${(playing || finished) && ch ? escapeHtml(ch.file) : "bug-hunt"} — Showcase Lab</span>
          </div>
          <div class="vscode-body">
            <aside class="vscode-sidebar">
              <div class="side-label">Explorer</div>
              ${files}
            </aside>
            <div class="vscode-main">
              <div class="vscode-tabs"><div class="vscode-tab">${(playing || finished) && ch ? escapeHtml(ch.file) : "ready"}</div></div>
              <div class="vscode-editor" id="huntEditor">${linesHtml || `<p class="muted" style="padding:1rem">${escapeHtml(t("bugs.pressStart"))}</p>`}</div>
              ${fixPanel}
            </div>
          </div>
          <div class="vscode-status">
            <span>${(playing || finished) && ch ? escapeHtml(ch.file) : "Bug Hunt"}</span>
            <span>${FRAMEWORK} · ${(playing || finished) ? `#${Math.min(index + 1, challenges.length)}/${challenges.length}` : "ready"}</span>
          </div>
        </div>
        ${finishPanel}
        <h2 style="margin-top:1.5rem">${escapeHtml(t("bugs.results"))}</h2>
        <div id="huntScores" class="card"></div>
      </section>`;

    paintScores();

    document.getElementById("huntStart")?.addEventListener("click", () => {
      playing = true;
      finished = false;
      index = 0;
      foundLine = false;
      foundBugLine = null;
      wrongLine = null;
      checking = false;
      startedAt = performance.now();
      nowMs = 0;
      stopTick();
      tickId = setInterval(() => {
        nowMs = Math.floor(performance.now() - startedAt);
        const el = document.getElementById("huntTimer");
        if (el) el.textContent = formatTime(nowMs);
      }, 100);
      paint();
    });

    document.querySelectorAll("#huntEditor .vscode-line").forEach((row) => {
      row.addEventListener("click", async () => {
        if (!playing || finished || foundLine || checking) return;
        const n = Number(row.getAttribute("data-line"));
        checking = true;
        try {
          const { ok } = await checkChallengeLine(current().id, n);
          if (ok) {
            foundLine = true;
            foundBugLine = n;
            wrongLine = null;
            paint();
          } else {
            wrongLine = n;
            paint();
            showToast(t("bugs.wrongLine"));
            setTimeout(() => {
              wrongLine = null;
              const bad = document.querySelector(".vscode-line.is-wrong");
              if (bad) bad.classList.remove("is-wrong");
            }, 400);
          }
        } catch (err) {
          showToast(err.message || t("bugs.checkError"));
        } finally {
          checking = false;
        }
      });
    });

    document.querySelectorAll("[data-fix]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (checking) return;
        const id = btn.getAttribute("data-fix");
        checking = true;
        try {
          const { ok } = await checkChallengeFix(current().id, id);
          if (!ok) {
            showToast(t("bugs.wrongFix"));
            return;
          }
          if (index >= challenges.length - 1) {
            nowMs = Math.floor(performance.now() - startedAt);
            stopTick();
            playing = false;
            finished = true;
            paint();
            return;
          }
          index += 1;
          foundLine = false;
          foundBugLine = null;
          wrongLine = null;
          paint();
        } catch (err) {
          showToast(err.message || t("bugs.checkError"));
        } finally {
          checking = false;
        }
      });
    });

    document.getElementById("huntSave")?.addEventListener("click", async () => {
      const name = (document.getElementById("huntPlayer")?.value || "").trim() || "anonymous";
      player = name;
      try {
        await postScore({ player_name: name, time_ms: nowMs, framework: FRAMEWORK });
        scores = await fetchScores();
        showToast(t("bugs.saved"));
        paintScores();
      } catch (err) {
        showToast(err.message || t("bugs.saveError"));
      }
    });
  }

  huntSession = {
    stopTick,
    async onLocale() {
      const nameEl = document.getElementById("huntPlayer");
      if (nameEl) player = nameEl.value;
      try {
        const data = await fetchChallenges();
        if (gen !== huntGen) return;
        challenges = data.items;
        scores = await fetchScores();
        if (gen !== huntGen) return;
      } catch (_) {
        if (gen !== huntGen) return;
      }
      paint();
    },
  };

  paint();
}
