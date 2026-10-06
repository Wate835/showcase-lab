import { getLocale, t } from "/app/shared/i18n.js";
import { fetchGuestbook, postGuestbook } from "../api/index.js";
import { FRAMEWORK } from "../constants.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { showToast } from "../utils/toast.js";

function readGuestbookDraft() {
  const form = document.getElementById("gbForm");
  if (!form) return { author: "", message: "" };
  return {
    author: form.elements.author?.value ?? "",
    message: form.elements.message?.value ?? "",
  };
}

async function paintGuestbook(appEl, draft = { author: "", message: "" }) {
  const entries = await fetchGuestbook();
  const localeTag = getLocale() === "en" ? "en-US" : "ru-RU";
  appEl.innerHTML = `
      <section>
        <h1>${escapeHtml(t("guestbook.title"))}</h1>
        <p class="lead">${escapeHtml(t("guestbook.lead"))}</p>
        <form class="form card" id="gbForm">
          <label>${escapeHtml(t("guestbook.name"))} <input name="author" maxlength="40" required value="${escapeHtml(draft.author)}" /></label>
          <label>${escapeHtml(t("guestbook.message"))} <textarea name="message" rows="3" maxlength="500" required>${escapeHtml(draft.message)}</textarea></label>
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
      await paintGuestbook(appEl);
    } catch (err) {
      showToast(err.message || t("guestbook.sendError"));
      if (btn) btn.disabled = false;
    }
  });
}

export async function applyGuestbookLocale(appEl) {
  const draft = readGuestbookDraft();
  try {
    await paintGuestbook(appEl, draft);
  } catch (err) {
    showToast(err.message || t("common.error"));
  }
}

export async function renderGuestbook(appEl) {
  appEl.innerHTML = `<p class="muted">${escapeHtml(t("guestbook.loading"))}</p>`;
  await paintGuestbook(appEl);
}
