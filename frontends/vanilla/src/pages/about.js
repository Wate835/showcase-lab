import { fetchProfile } from "../api/index.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { t } from "/app/shared/i18n.js";

export async function renderAbout(appEl) {
  appEl.innerHTML = `<p class="muted">${escapeHtml(t("about.loading"))}</p>`;
  const p = await fetchProfile();
  appEl.innerHTML = `
    <section>
      <h1>${escapeHtml(p.name)}</h1>
      <p class="lead">${escapeHtml(p.title)} · ${escapeHtml(p.city)}</p>
      <p class="lead">${escapeHtml(p.summary)}</p>
      <div class="chip-row">
        ${p.skills.map((s) => `<span class="chip">${escapeHtml(s)}</span>`).join("")}
      </div>
      <div class="card">
        <h2>${escapeHtml(t("about.me"))}</h2>
        <p class="msg">${escapeHtml(p.about)}</p>
        <p class="muted" style="margin-top:1rem">
          <a href="${escapeHtml(p.telegram)}" target="_blank" rel="noreferrer">Telegram</a> ·
          <a href="mailto:${escapeHtml(p.email)}">${escapeHtml(p.email)}</a> ·
          <a href="${escapeHtml(p.github)}" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
      <div class="stack" style="margin-top:1rem">
        ${p.experience
          .map(
            (job) => `
          <article class="card">
            <h2>${escapeHtml(job.company)} — ${escapeHtml(job.role)}</h2>
            <p class="muted">${escapeHtml(job.period)}</p>
            <ul>
              ${job.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
            </ul>
          </article>`
          )
          .join("")}
      </div>
    </section>`;
}
