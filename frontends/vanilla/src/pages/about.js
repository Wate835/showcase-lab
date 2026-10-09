import { fetchProfile, fetchProjects } from "../api/index.js";
import { INTERNAL_DEMO_HASH } from "../constants.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { t } from "/app/shared/i18n.js";

function isInternalDemo(url) {
  return Boolean(url && url.startsWith("/") && !url.startsWith("//"));
}

function caseTitle(title, url) {
  const safeTitle = escapeHtml(title);
  if (isInternalDemo(url)) {
    const href = INTERNAL_DEMO_HASH[url] || `#${url.replace(/^\//, "")}`;
    return `<a href="${escapeHtml(href)}">${safeTitle}</a>`;
  }
  if (url) {
    return `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${safeTitle}</a>`;
  }
  return safeTitle;
}

export async function renderAbout(appEl) {
  appEl.innerHTML = `<p class="muted">${escapeHtml(t("about.loading"))}</p>`;
  const [p, cases] = await Promise.all([fetchProfile(), fetchProjects()]);
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
      ${
        cases.length
          ? `
      <div class="cases">
        <h2>${escapeHtml(t("about.cases"))}</h2>
        <p class="lead">${escapeHtml(t("about.casesLead"))}</p>
        <div class="stack">
        ${cases
          .map(
            (item) => `
          <article class="card">
            <h2>${caseTitle(item.title, item.url)}</h2>
            <p class="muted">${escapeHtml(item.year)}</p>
          </article>`
          )
          .join("")}
        </div>
      </div>`
          : ""
      }
    </section>`;
}
