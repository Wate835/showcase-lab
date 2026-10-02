import { t } from "/app/shared/i18n.js";

const PHOTO_EDITOR_BASE = "/app/photo-editor";

let photoEditorUnmount = null;

export function stopPhotoEditor() {
  photoEditorUnmount?.();
  photoEditorUnmount = null;
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
    link.href = `${PHOTO_EDITOR_BASE}/style.css`;
    link.dataset.photoEditorStyle = "1";
    document.head.appendChild(link);
  }

  const { mountPhotoEditor } = await import(`${PHOTO_EDITOR_BASE}/mount.js`);
  const { unmount } = mountPhotoEditor(host);
  photoEditorUnmount = unmount;
}
