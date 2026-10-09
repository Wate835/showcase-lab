import { bootPrefs } from "/app/shared/boot.js";
import { getLocale, subscribeLocale, t, toggleLocale } from "/app/shared/i18n.js";
import { CONTACTS } from "/app/shared/site.js";
import { subscribeTheme, toggleTheme } from "/app/shared/theme.js";
import { ROUTES } from "./constants.js";
import { escapeHtml } from "./utils/escapeHtml.js";
import { renderAbout } from "./pages/about.js";
import { renderBugHunt, applyBugHuntLocale, stopBugHunt } from "./pages/bugHunt.js";
import { renderIncidents, stopIncidentsLive, applyIncidentsLocale } from "./pages/incidents.js";
import { renderGuestbook, applyGuestbookLocale } from "./pages/guestbook.js";
import { renderPhotoEditor, stopPhotoEditor, applyPhotoEditorLocale } from "./pages/photoEditor.js";

bootPrefs();

const appEl = document.getElementById("app");
const topbarEl = document.getElementById("topbar");
const navEl = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const themeToggle = document.getElementById("themeToggle");
const localeToggle = document.getElementById("localeToggle");
const switchStack = document.getElementById("switchStack");
const footerApi = document.getElementById("footerApi");
const footerContacts = document.getElementById("footerContacts");
const footerTelegram = document.getElementById("footerTelegram");
const footerEmail = document.getElementById("footerEmail");
const footerGithub = document.getElementById("footerGithub");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const desktopNavMq = window.matchMedia("(min-width: 860px)");

function currentRoute() {
  const hash = location.hash.replace("#", "");
  return ROUTES.some((r) => r.id === hash) ? hash : "about";
}

function isCompactNav() {
  return !desktopNavMq.matches;
}

function shouldAnimatePage() {
  return !reduceMotion && !isCompactNav();
}

function isNavOpen() {
  return Boolean(topbarEl?.classList.contains("is-nav-open"));
}

function setNavOpen(open) {
  if (!topbarEl || !navToggle) return;
  topbarEl.classList.toggle("is-nav-open", open);
  document.documentElement.classList.toggle("is-nav-open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", open ? t("shell.menuClose") : t("shell.menuOpen"));
}

function paintChrome() {
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", t("shell.themeAria"));
    themeToggle.setAttribute("data-tip", t("shell.themeAria"));
  }
  if (localeToggle) {
    localeToggle.textContent =
      getLocale() === "en" ? t("shell.localeToEn") : t("shell.localeToRu");
    localeToggle.setAttribute("aria-label", t("shell.localeAria"));
  }
  if (switchStack) {
    switchStack.setAttribute("aria-label", t("shell.switchStack"));
    switchStack.setAttribute("data-tip", t("shell.switchStack"));
  }
  if (navToggle) {
    navToggle.setAttribute(
      "aria-label",
      isNavOpen() ? t("shell.menuClose") : t("shell.menuOpen")
    );
  }
  if (footerApi) footerApi.textContent = t("shell.footerApi");
  if (footerContacts) footerContacts.setAttribute("aria-label", t("landing.contactsAria"));
  if (footerTelegram) footerTelegram.href = CONTACTS.telegram;
  if (footerEmail) {
    footerEmail.href = `mailto:${CONTACTS.email}`;
    footerEmail.textContent = CONTACTS.email;
  }
  if (footerGithub) footerGithub.href = CONTACTS.github;
  renderNav();
}

function renderNav() {
  const active = currentRoute();
  navEl.innerHTML = ROUTES.map(
    (r) =>
      `<a href="#${r.id}" class="${r.id === active ? "active" : ""}">${escapeHtml(t(`nav.${r.id}`))}</a>`
  ).join("");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function swapPage(renderFn) {
  if (shouldAnimatePage()) {
    appEl.classList.remove("page");
    appEl.classList.add("page", "is-leaving");
    await wait(160);
  }
  await renderFn();
  if (shouldAnimatePage()) {
    appEl.classList.remove("page", "is-leaving");
    void appEl.offsetWidth;
    appEl.classList.add("page");
  } else {
    appEl.classList.remove("is-leaving");
    appEl.classList.add("page");
  }
}

async function render() {
  if (currentRoute() !== "incidents") stopIncidentsLive();
  if (currentRoute() !== "photoEditor") stopPhotoEditor();
  if (currentRoute() !== "bugs") stopBugHunt();
  paintChrome();
  const route = currentRoute();
  try {
    await swapPage(async () => {
      if (route === "about") await renderAbout(appEl);
      else if (route === "bugs") await renderBugHunt(appEl);
      else if (route === "incidents") await renderIncidents(appEl, currentRoute);
      else if (route === "guestbook") await renderGuestbook(appEl);
      else if (route === "photoEditor") await renderPhotoEditor(appEl);
    });
  } catch (err) {
    appEl.classList.remove("is-leaving");
    appEl.classList.add("page");
    appEl.innerHTML = `<p class="error">${escapeHtml(t("common.error"))} ${escapeHtml(err.message)}</p>`;
  }
}

themeToggle?.addEventListener("click", () => {
  toggleTheme();
});
localeToggle?.addEventListener("click", () => {
  toggleLocale();
});
navToggle?.addEventListener("click", () => {
  setNavOpen(!isNavOpen());
});
navEl?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLAnchorElement)) return;
  const id = (target.getAttribute("href") || "").replace("#", "");
  if (id && id === currentRoute()) setNavOpen(false);
});
document.querySelector(".logo")?.addEventListener("click", () => {
  if (currentRoute() === "about") setNavOpen(false);
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNavOpen(false);
});
const onDesktopNavChange = () => {
  if (desktopNavMq.matches) setNavOpen(false);
};
if (typeof desktopNavMq.addEventListener === "function") {
  desktopNavMq.addEventListener("change", onDesktopNavChange);
} else if (typeof desktopNavMq.addListener === "function") {
  desktopNavMq.addListener(onDesktopNavChange);
}

subscribeTheme(() => {
  paintChrome();
});
subscribeLocale(() => {
  paintChrome();
  const route = currentRoute();
  if (route === "photoEditor") applyPhotoEditorLocale();
  else if (route === "bugs") applyBugHuntLocale();
  else if (route === "guestbook") applyGuestbookLocale(appEl);
  else if (route === "incidents") applyIncidentsLocale(appEl, currentRoute);
  else if (route === "about") renderAbout(appEl);
});

window.addEventListener("hashchange", async () => {
  await render();
  setNavOpen(false);
});
paintChrome();
render();
