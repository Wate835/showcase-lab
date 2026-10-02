import { useEffect, useRef } from "react";
import { mountPhotoEditor } from "@showcase-lab/photo-editor/mount";
import "@showcase-lab/photo-editor/style.css";

export function PhotoEditorPage() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const { unmount } = mountPhotoEditor(el);
    return unmount;
  }, []);

  return (
    <section>
      <h1>Photo Editor</h1>
      <p className="lead">Кадрирование, поворот и цветокоррекция прямо в браузере.</p>
      <div ref={hostRef} />
    </section>
  );
}
