import { t, getLocale, subscribeLocale } from "/app/shared/i18n.js";

const PHOTO_EDITOR_BASE = "/app/photo-editor";
const PE_MOUNT = `${PHOTO_EDITOR_BASE}/mount.js?v=pe-locale-1`;

let photoEditorUnmount = null;
let setEditorLocale = null;
let stopLocale = null;

function paintPhotoEditorCopy() {
  const title = document.querySelector("#app > section > h1");
  const lead = document.querySelector("#app > section > .lead");
  if (title) title.textContent = t("photoEditor.title");
  if (lead) lead.textContent = t("photoEditor.lead");
}

export function applyPhotoEditorLocale() {
  setEditorLocale?.(getLocale());
  paintPhotoEditorCopy();
}

export function stopPhotoEditor() {
  stopLocale?.();
  stopLocale = null;
  photoEditorUnmount?.();
  photoEditorUnmount = null;
  setEditorLocale = null;
}

export async function renderPhotoEditor(appEl) {
  stopPhotoEditor();
  appEl.innerHTML = `
    <section>
      <h1>${t("photoEditor.title")}</h1>
      <p class="lead">${t("photoEditor.lead")}</p>
      <div id="photo-editor-host"></div>
    </section>
  `;

  const host = appEl.querySelector("#photo-editor-host");
  if (!host) return;

  if (!document.querySelector(`link[data-photo-editor-style]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${PHOTO_EDITOR_BASE}/style.css?v=pe-locale-1`;
    link.dataset.photoEditorStyle = "1";
    document.head.appendChild(link);
  }

  const { mountPhotoEditor } = await import(PE_MOUNT);
  const mounted = mountPhotoEditor(host, { locale: getLocale() });
  setEditorLocale = mounted.setLocale;
  photoEditorUnmount = mounted.unmount;
  stopLocale = subscribeLocale(applyPhotoEditorLocale);
}
