import { ref, watch } from "vue";
import { ApiError, fetchGuestbook, postGuestbook } from "../../api";
import { FRAMEWORK } from "../../constants/framework";
import type { GuestbookEntry } from "../../types";
import { showToast } from "../../utils/toast";
import { useI18n } from "../../utils/usePrefs";

export function useGuestbook() {
  const entries = ref<GuestbookEntry[]>([]);
  const author = ref("");
  const message = ref("");
  const { locale, t } = useI18n();

  async function load() {
    try {
      entries.value = await fetchGuestbook();
    } catch {
      /* ignore */
    }
  }

  async function onSubmit() {
    try {
      await postGuestbook({
        author: author.value,
        message: message.value,
        framework: FRAMEWORK,
      });
      author.value = "";
      message.value = "";
      await load();
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : t("guestbook.sendError");
      showToast(msg);
    }
  }

  watch(locale, load, { immediate: true });
  return { entries, author, message, onSubmit };
}
