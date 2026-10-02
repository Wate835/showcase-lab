export class ApiError extends Error {
  code?: string;
  status: number;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

const API = "/api";

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json", ...(options?.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const raw = await res.text();
    let message = raw || res.statusText;
    let code: string | undefined;
    try {
      const parsed = JSON.parse(raw);
      const detail = parsed?.detail;
      if (typeof detail === "string") message = detail;
      else if (detail && typeof detail === "object") {
        message = detail.message || message;
        code = detail.code;
      }
    } catch {
      /* plain text */
    }
    throw new ApiError(message, res.status, code);
  }
  return res.json() as Promise<T>;
}
