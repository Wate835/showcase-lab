import { FormEvent, useCallback, useEffect, useState } from "react";
import { ApiError, fetchGuestbook, postGuestbook } from "../../api";
import { FRAMEWORK } from "../../constants/framework";
import type { GuestbookEntry } from "../../types";
import { showToast } from "../../utils/toast";
import { useI18n } from "../../utils/usePrefs";

export function useGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const { locale, t } = useI18n();

  const load = useCallback(() => {
    fetchGuestbook().then(setEntries).catch(() => undefined);
  }, []);

  useEffect(() => {
    load();
  }, [load, locale]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await postGuestbook({ author, message, framework: FRAMEWORK });
      setAuthor("");
      setMessage("");
      load();
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : t("guestbook.sendError");
      showToast(msg);
    }
  }

  return { entries, author, setAuthor, message, setMessage, onSubmit };
}
