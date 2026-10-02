import { fetchProjects } from "../api/index.js";
import { escapeHtml } from "../utils/escapeHtml.js";

export async function renderProjects(appEl) {
  appEl.innerHTML = `<p class="muted">Загрузка проектов…</p>`;
  const projects = await fetchProjects();
  appEl.innerHTML = `
    <section>
      <h1>Projects</h1>
      <p class="lead">Проекты и кейсы из опыта.</p>
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
                ? `<p class="muted" style="margin-top:.75rem"><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Открыть демо</a></p>`
                : ""
            }
            <div class="chip-row">
              ${item.tags.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join("")}
            </div>
          </article>`
          )
          .join("")}
      </div>
    </section>`;
}
