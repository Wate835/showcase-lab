import { useEffect, useRef } from "react";
import { mountPhotoEditor } from "@showcase-lab/photo-editor/mount";
import "@showcase-lab/photo-editor/style.css";
import { useI18n } from "../../../utils/usePrefs";

type PhotoEditorApi = {
  unmount: () => void;
  setLocale: (locale: "ru" | "en") => void;
};

export function PhotoEditorPage() {
  const hostRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<PhotoEditorApi | null>(null);
  const localeRef = useRef<"ru" | "en">("ru");
  const { t, locale } = useI18n();
  localeRef.current = locale;

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const mounted = mountPhotoEditor(el, { locale: localeRef.current });
    apiRef.current = mounted;
    return () => {
      mounted.unmount();
      if (apiRef.current === mounted) apiRef.current = null;
    };
  }, []);

  useEffect(() => {
    apiRef.current?.setLocale(locale);
  }, [locale]);

  return (
    <section>
      <h1>{t("photoEditor.title")}</h1>
      <p className="lead">{t("photoEditor.lead")}</p>
      <div ref={hostRef} />
    </section>
  );
}
