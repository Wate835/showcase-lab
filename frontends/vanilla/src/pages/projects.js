import { t } from "/app/shared/i18n.js";
import { fetchProjects } from "../api/index.js";
import { escapeHtml } from "../utils/escapeHtml.js";

export async function renderProjects(appEl) {
  appEl.innerHTML = `<p class="muted">${escapeHtml(t("projects.loading"))}</p>`;
  const projects = await fetchProjects();
  appEl.innerHTML = `
    <section>
      <h1>${escapeHtml(t("projects.title"))}</h1>
      <p class="lead">${escapeHtml(t("projects.lead"))}</p>
      <div class="stack">
        ${projects
          .map(
            (item) => `
          <article class="card">
            <h2>${escapeHtml(item.title)}</h2>
            <p class="muted">${escapeHtml(item.year)}</p>
            <p class="msg">${escapeHtml(item.description)}</p>
            ${
              item.url
                ? `<p class="muted" style="margin-top:.75rem"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(t("projects.openDemo"))}</a></p>`
                : ""
            }
            <div class="chip-row">
              ${item.tags.map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </article>`
          )
          .join("")}
      </div>
    </section>`;
}
