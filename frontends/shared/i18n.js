const STORAGE_KEY = "showcase-locale";
const listeners = new Set();

export const LOCALES = /** @type {const} */ (["ru", "en"]);

/** @type {Record<"ru" | "en", Record<string, string>>} */
export const messages = {
  ru: {
    "shell.switchStack": "Сменить стек",
    "shell.themeToLight": "Светлая",
    "shell.themeToDark": "Тёмная",
    "shell.localeToEn": "EN",
    "shell.localeToRu": "RU",
    "shell.footerApi": "API: FastAPI + SQLAlchemy",
    "shell.themeAria": "Переключить тему",
    "shell.localeAria": "Переключить язык",

    "nav.about": "Обо мне",
    "nav.projects": "Проекты",
    "nav.photoEditor": "Фоторедактор",
    "nav.bugs": "Bug Hunt",
    "nav.incidents": "Инциденты",
    "nav.guestbook": "Гостевая",

    "about.loading": "Загрузка профиля…",
    "about.me": "Обо мне",

    "projects.title": "Проекты",
    "projects.lead": "Проекты и кейсы из опыта.",
    "projects.openDemo": "Открыть демо",
    "projects.loading": "Загрузка проектов…",
    "projects.loadingError": "Ошибка загрузки",

    "photoEditor.title": "Фоторедактор",
    "photoEditor.lead": "Кадрирование, поворот и цветокоррекция прямо в браузере.",

    "guestbook.title": "Гостевая",
    "guestbook.lead": "Оставь след. Сообщение пишется в SQLite.",
    "guestbook.name": "Имя",
    "guestbook.message": "Сообщение",
    "guestbook.submit": "Отправить",
    "guestbook.loading": "Загрузка guestbook…",

    "incidents.title": "Инциденты",
    "incidents.intro": "Фейковый DevOps-монитор.",
    "incidents.open": "Открыто:",
    "incidents.live": "Live:",
    "incidents.wsReady": "WebSocket",
    "incidents.resolve": "Закрыть",
    "incidents.waiting": "Ждём WebSocket…",
    "incidents.connecting": "подключение…",
    "incidents.reconnecting": "переподключение…",
    "incidents.wsError": "ошибка WS",

    "bugs.title": "Bug Hunt",
    "bugs.lead":
      "Найди и исправь {count} классических багов {framework}. Кликни по ошибочной строке, затем выбери фикс.",
    "bugs.start": "Старт",
    "bugs.inProgress": "В процессе…",
    "bugs.ready": "Готов?",
    "bugs.bugProgress": "Баг {current} / {total}",
    "bugs.observation": "Наблюдение:",
    "bugs.howToPlay": "Как играть:",
    "bugs.howToPlayBody": "короткий симптом — без спойлера. Найди строку и выбери фикс.",
    "bugs.pressStart": "Нажми «Старт»",
    "bugs.fixPrompt": "Баг на строке {line}. Выбери исправление:",
    "bugs.allFixed": "Все баги закрыты!",
    "bugs.time": "Время:",
    "bugs.nick": "Ник",
    "bugs.saveScore": "Сохранить результат",
    "bugs.results": "Результаты (быстрее = лучше)",
    "bugs.colPlayer": "Игрок",
    "bugs.colTime": "Время",
    "bugs.loading": "Загрузка челленджей…",

    "bugs.colFw": "Стек",
    "bugs.wrongLine": "Не та строка",
    "bugs.wrongFix": "Это не исправляет баг",
    "bugs.checkError": "Ошибка проверки",
    "bugs.saved": "Результат сохранён",
    "bugs.saveError": "Ошибка сохранения",
    "bugs.nickPlaceholder": "anonymous",

    "guestbook.sendError": "Не удалось отправить",

    "landing.title": "Showcase Lab — выбери стек",
    "landing.lead": "Портфолио Антона Кудрявцева. Один FastAPI-бэкенд — три фронта. Выбери стек: у каждого своя цветовая гамма и тот же набор экранов.",
    "landing.vanilla": "Нативный JS. Тёплая amber-палитра.",
    "landing.react": "Vite + TypeScript. Cool cyan.",
    "landing.vue": "Vite + TypeScript. Emerald.",
    "landing.hint": "Выбор запоминается в cookie на 30 дней. Можно сменить через «Сменить стек».",
    "landing.langAria": "Переключить язык",

    "common.error": "Ошибка:",
    "common.loadingError": "Ошибка загрузки",
  },
  en: {
    "shell.switchStack": "Switch stack",
    "shell.themeToLight": "Light",
    "shell.themeToDark": "Dark",
    "shell.localeToEn": "EN",
    "shell.localeToRu": "RU",
    "shell.footerApi": "API: FastAPI + SQLAlchemy",
    "shell.themeAria": "Toggle theme",
    "shell.localeAria": "Toggle language",

    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.photoEditor": "Photo editor",
    "nav.bugs": "Bug Hunt",
    "nav.incidents": "Incidents",
    "nav.guestbook": "Guestbook",

    "about.loading": "Loading profile…",
    "about.me": "About me",

    "projects.title": "Projects",
    "projects.lead": "Projects and case studies from experience.",
    "projects.openDemo": "Open demo",
    "projects.loading": "Loading projects…",
    "projects.loadingError": "Failed to load",

    "photoEditor.title": "Photo Editor",
    "photoEditor.lead": "Crop, rotate, and color-correct right in the browser.",

    "guestbook.title": "Guestbook",
    "guestbook.lead": "Leave a note. Messages are stored in SQLite.",
    "guestbook.name": "Name",
    "guestbook.message": "Message",
    "guestbook.submit": "Send",
    "guestbook.loading": "Loading guestbook…",

    "incidents.title": "Incident Board",
    "incidents.intro": "A fake DevOps monitor.",
    "incidents.open": "Open:",
    "incidents.live": "Live:",
    "incidents.wsReady": "WebSocket",
    "incidents.resolve": "Resolve",
    "incidents.waiting": "Waiting for WebSocket…",
    "incidents.connecting": "connecting…",
    "incidents.reconnecting": "reconnecting…",
    "incidents.wsError": "WS error",

    "bugs.title": "Bug Hunt",
    "bugs.lead":
      "Find and fix {count} classic {framework} bugs. Click the faulty line, then pick a fix.",
    "bugs.start": "Start",
    "bugs.inProgress": "In progress…",
    "bugs.ready": "Ready?",
    "bugs.bugProgress": "Bug {current} / {total}",
    "bugs.observation": "Observation:",
    "bugs.howToPlay": "How to play:",
    "bugs.howToPlayBody": "a short symptom — no spoilers. Find the line and pick a fix.",
    "bugs.pressStart": "Press “Start”",
    "bugs.fixPrompt": "Bug on line {line}. Choose a fix:",
    "bugs.allFixed": "All bugs closed!",
    "bugs.time": "Time:",
    "bugs.nick": "Nickname",
    "bugs.saveScore": "Save score",
    "bugs.results": "Leaderboard (faster is better)",
    "bugs.colPlayer": "Player",
    "bugs.colTime": "Time",
    "bugs.loading": "Loading challenges…",

    "bugs.colFw": "Stack",
    "bugs.wrongLine": "Wrong line",
    "bugs.wrongFix": "That does not fix the bug",
    "bugs.checkError": "Check failed",
    "bugs.saved": "Score saved",
    "bugs.saveError": "Failed to save",
    "bugs.nickPlaceholder": "anonymous",

    "guestbook.sendError": "Could not send",

    "landing.title": "Showcase Lab — pick a stack",
    "landing.lead": "Anton Kudryavcev's portfolio. One FastAPI backend — three frontends. Pick a stack: each has its own palette and the same screens.",
    "landing.vanilla": "Native JS. Warm amber palette.",
    "landing.react": "Vite + TypeScript. Cool cyan.",
    "landing.vue": "Vite + TypeScript. Emerald.",
    "landing.hint": "The choice is stored in a cookie for 30 days. You can change it via “Switch stack”.",
    "landing.langAria": "Toggle language",

    "common.error": "Error:",
    "common.loadingError": "Failed to load",
  },
};

/** @returns {"ru" | "en"} */
export function detectLocale() {
  const nav = String(
    (typeof navigator !== "undefined" && (navigator.language || navigator.languages?.[0])) || ""
  ).toLowerCase();
  return nav.startsWith("en") ? "en" : "ru";
}

/** @returns {"ru" | "en"} */
export function getLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  const lang = document.documentElement.getAttribute("lang");
  if (lang === "ru" || lang === "en") return lang;
  return detectLocale();
}

/** @param {"ru" | "en"} locale */
export function setLocale(locale) {
  const next = locale === "en" ? "en" : "ru";
  document.documentElement.setAttribute("lang", next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("showcase-locale", { detail: next }));
  listeners.forEach((fn) => fn());
}

export function toggleLocale() {
  setLocale(getLocale() === "ru" ? "en" : "ru");
}

export function initLocale() {
  setLocale(getLocale());
}

/**
 * @param {string} key
 * @param {Record<string, string | number>} [vars]
 */
export function t(key, vars = {}) {
  const locale = getLocale();
  const dict = messages[locale] || messages.ru;
  let str = dict[key] ?? messages.ru[key] ?? messages.en[key] ?? key;
  return str.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] !== undefined && vars[name] !== null ? String(vars[name]) : `{${name}}`
  );
}

/** @param {() => void} cb */
export function subscribeLocale(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
