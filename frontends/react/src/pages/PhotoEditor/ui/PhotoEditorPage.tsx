import { useEffect, useRef } from "react";
import { mountPhotoEditor } from "@showcase-lab/photo-editor/mount";
import "@showcase-lab/photo-editor/style.css";
import { useI18n } from "../../../utils/usePrefs";

export function PhotoEditorPage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const { unmount } = mountPhotoEditor(el);
    return unmount;
  }, []);

  return (
    <section>
      <h1>{t("photoEditor.title")}</h1>
      <p className="lead">{t("photoEditor.lead")}</p>
      <div ref={hostRef} />
    </section>
  );
}
