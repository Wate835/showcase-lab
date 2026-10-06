import { getLocale } from "/app/shared/i18n.js";

const API = "/api";

function withLang(path) {
  const url = new URL(path, "http://local.invalid");
  url.searchParams.set("lang", getLocale());
  return `${url.pathname}${url.search}`;
}

export async function api(path, options = {}) {
  const { headers: extraHeaders, ...rest } = options;
  const res = await fetch(`${API}${withLang(path)}`, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": getLocale(),
      ...(extraHeaders || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    let message = text || res.statusText;
    let code;
    try {
      const parsed = JSON.parse(text);
      const detail = parsed?.detail;
      if (typeof detail === "string") message = detail;
      else if (detail && typeof detail === "object") {
        message = detail.message || message;
        code = detail.code;
      }
    } catch (_) {
      /* plain */
    }
    const err = new Error(message);
    err.code = code;
    err.status = res.status;
    throw err;
  }
  return res.json();
}
