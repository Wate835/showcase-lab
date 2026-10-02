import { fetchGuestbook, postGuestbook } from "../api/index.js";
import { FRAMEWORK } from "../constants.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { showToast } from "../utils/toast.js";

export async function renderGuestbook(appEl) {
  appEl.innerHTML = `<p class="muted">Загрузка guestbook…</p>`;

  async function paint() {
    const entries = await fetchGuestbook();
    appEl.innerHTML = `
      <section>
        <h1>Guestbook</h1>
        <p class="lead">Оставь след. Сообщение пишется в SQLite.</p>
        <form class="form card" id="gbForm">
          <label>Имя <input name="author" maxlength="40" required /></label>
          <label>Сообщение <textarea name="message" rows="3" maxlength="500" required></textarea></label>
          <button class="btn" type="submit">Отправить</button>
        </form>
        <div class="stack" style="margin-top:1rem">
          ${entries
            .map(
              (e) => `
            <article class="card">
              <strong>${escapeHtml(e.author)}</strong>
              <span class="muted"> · ${escapeHtml(e.framework)} · ${new Date(e.created_at).toLocaleString()}</span>
              <p class="msg">${escapeHtml(e.message)}</p>
            </article>`
            )
            .join("")}
        </div>
      </section>`;

    document.getElementById("gbForm").addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const fd = new FormData(ev.target);
      const btn = ev.target.querySelector('button[type="submit"]');
      if (btn) btn.disabled = true;
      try {
        await postGuestbook({
          author: fd.get("author"),
          message: fd.get("message"),
          framework: FRAMEWORK,
        });
        await paint();
      } catch (err) {
        showToast(err.message || "Не удалось отправить");
        if (btn) btn.disabled = false;
      }
    });
  }

  await paint();
}
