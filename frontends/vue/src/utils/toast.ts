export function showToast(message: string, ms = 3200): void {
  let host = document.querySelector(".toast-host") as HTMLElement | null;
  if (!host) {
    host = document.createElement("div");
    host.className = "toast-host";
    document.body.appendChild(host);
  }
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  host.appendChild(el);
  window.setTimeout(() => {
    el.classList.add("is-hiding");
    window.setTimeout(() => el.remove(), 280);
  }, ms);
}
