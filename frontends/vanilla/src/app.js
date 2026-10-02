import { ROUTES } from "./constants.js";
import { escapeHtml } from "./utils/escapeHtml.js";
import { renderAbout } from "./pages/about.js";
import { renderProjects } from "./pages/projects.js";
import { renderBugHunt } from "./pages/bugHunt.js";
import { renderIncidents, stopIncidentsLive } from "./pages/incidents.js";
import { renderGuestbook } from "./pages/guestbook.js";
import { renderPhotoEditor, stopPhotoEditor } from "./pages/photoEditor.js";

const appEl = document.getElementById("app");
const navEl = document.getElementById("nav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function currentRoute() {
  const hash = location.hash.replace("#", "");
  return ROUTES.some((r) => r.id === hash) ? hash : "about";
}

function renderNav() {
  const active = currentRoute();
  navEl.innerHTML = ROUTES.map(
    (r) => `<a href="#${r.id}" class="${r.id === active ? "active" : ""}">${r.label}</a>`
  ).join("");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function swapPage(renderFn) {
  if (!reduceMotion) {
    appEl.classList.remove("page");
    appEl.classList.add("page", "is-leaving");
    await wait(160);
  }
  await renderFn();
  if (!reduceMotion) {
    appEl.classList.remove("page", "is-leaving");
    void appEl.offsetWidth;
    appEl.classList.add("page");
  }
}

async function render() {
  if (currentRoute() !== "incidents") stopIncidentsLive();
  if (currentRoute() !== "photoEditor") stopPhotoEditor();
  renderNav();
  const route = currentRoute();
  try {
    await swapPage(async () => {
      if (route === "about") await renderAbout(appEl);
      else if (route === "projects") await renderProjects(appEl);
      else if (route === "bugs") await renderBugHunt(appEl);
      else if (route === "incidents") await renderIncidents(appEl, currentRoute);
      else if (route === "guestbook") await renderGuestbook(appEl);
      else if (route === "photoEditor") await renderPhotoEditor(appEl);
    });
  } catch (err) {
    appEl.classList.remove("is-leaving");
    appEl.classList.add("page");
    appEl.innerHTML = `<p class="error">Ошибка: ${escapeHtml(err.message)}</p>`;
  }
}

window.addEventListener("hashchange", render);
render();
