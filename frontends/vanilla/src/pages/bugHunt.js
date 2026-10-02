import { checkChallengeFix, checkChallengeLine, fetchChallenges, fetchScores, postScore } from "../api/index.js";
import { FRAMEWORK } from "../constants.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { formatTime } from "../utils/formatTime.js";
import { showToast } from "../utils/toast.js";

export async function renderBugHunt(appEl) {
  appEl.innerHTML = `<p class="muted">Загрузка челленджей…</p>`;
  let challenges = [];
  let scores = [];
  try {
    const data = await fetchChallenges();
    challenges = data.items;
    scores = await fetchScores();
  } catch (err) {
    appEl.innerHTML = `<p class="error">${escapeHtml(err.message)}</p>`;
    return;
  }

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
        <thead><tr><th>#</th><th>Игрок</th><th>Время</th><th>FW</th></tr></thead>
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
          <h3>Баг на строке ${foundBugLine}. Выбери исправление:</h3>
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
          <h2>Все баги закрыты!</h2>
          <p class="lead">Время: <strong>${formatTime(elapsed)}</strong></p>
          <div class="form" style="margin-top:.75rem">
            <label>Ник <input id="huntPlayer" maxlength="40" placeholder="anonymous" value="${escapeHtml(player)}" /></label>
            <button class="btn" id="huntSave" type="button">Сохранить результат</button>
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

    appEl.innerHTML = `
      <section>
        <h1>Bug Hunt</h1>
        <p class="lead">Найди и исправь ${challenges.length} классических багов ${FRAMEWORK}. Кликни по ошибочной строке, затем выбери фикс.</p>
        <div class="hunt-toolbar">
          <button class="btn" id="huntStart" ${playing && !finished ? "disabled" : ""}>${finished || !playing ? "Старт" : "В процессе…"}</button>
          <span class="timer" id="huntTimer">${formatTime(elapsed)}</span>
          <span class="muted">${playing || finished ? `Баг ${Math.min(index + 1, challenges.length)} / ${challenges.length}` : "Готов?"}</span>
        </div>
        ${
          ch && (playing || finished)
            ? `<p class="hunt-hint"><strong>Наблюдение:</strong> ${escapeHtml(ch.hint || ch.title)}</p>`
            : `<p class="hunt-hint"><strong>Как играть:</strong> короткий симптом — без спойлера. Найди строку и выбери фикс.</p>`
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
              <div class="vscode-editor" id="huntEditor">${linesHtml || '<p class="muted" style="padding:1rem">Нажми «Старт»</p>'}</div>
              ${fixPanel}
            </div>
          </div>
          <div class="vscode-status">
            <span>${(playing || finished) && ch ? escapeHtml(ch.file) : "Bug Hunt"}</span>
            <span>${FRAMEWORK} · ${(playing || finished) ? `#${Math.min(index + 1, challenges.length)}/${challenges.length}` : "ready"}</span>
          </div>
        </div>
        ${finishPanel}
        <h2 style="margin-top:1.5rem">Результаты (быстрее = лучше)</h2>
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
            showToast("Не та строка");
            setTimeout(() => {
              wrongLine = null;
              const bad = document.querySelector(".vscode-line.is-wrong");
              if (bad) bad.classList.remove("is-wrong");
            }, 400);
          }
        } catch (err) {
          showToast(err.message || "Ошибка проверки");
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
            showToast("Это не исправляет баг");
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
          showToast(err.message || "Ошибка проверки");
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
        showToast("Результат сохранён");
        paintScores();
      } catch (err) {
        showToast(err.message || "Ошибка сохранения");
      }
    });
  }

  paint();
}
