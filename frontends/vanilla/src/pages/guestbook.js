import { getLocale, t } from "/app/shared/i18n.js";
import { fetchGuestbook, postGuestbook } from "../api/index.js";
import { FRAMEWORK } from "../constants.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { showToast } from "../utils/toast.js";

export async function renderGuestbook(appEl) {
  appEl.innerHTML = `<p class="muted">${escapeHtml(t("guestbook.loading"))}</p>`;

  async function paint() {
    const entries = await fetchGuestbook();
    const localeTag = getLocale() === "en" ? "en-US" : "ru-RU";
    appEl.innerHTML = `
      <section>
        <h1>${escapeHtml(t("guestbook.title"))}</h1>
        <p class="lead">${escapeHtml(t("guestbook.lead"))}</p>
        <form class="form card" id="gbForm">
          <label>${escapeHtml(t("guestbook.name"))} <input name="author" maxlength="40" required /></label>
          <label>${escapeHtml(t("guestbook.message"))} <textarea name="message" rows="3" maxlength="500" required></textarea></label>
          <button class="btn" type="submit">${escapeHtml(t("guestbook.submit"))}</button>
        </form>
        <div class="stack" style="margin-top:1rem">
          ${entries
            .map(
              (e) => `
            <article class="card">
              <strong>${escapeHtml(e.author)}</strong>
              <span class="muted"> · ${escapeHtml(e.framework)} · ${new Date(e.created_at).toLocaleString(localeTag)}</span>
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
