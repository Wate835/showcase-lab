const API = "/api";

export async function api(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
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
