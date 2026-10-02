import { onMounted, ref } from "vue";
import { ApiError, fetchGuestbook, postGuestbook } from "../../api";
import { FRAMEWORK } from "../../constants/framework";
import type { GuestbookEntry } from "../../types";
import { showToast } from "../../utils/toast";

export function useGuestbook() {
  const entries = ref<GuestbookEntry[]>([]);
  const author = ref("");
  const message = ref("");

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
      const msg = err instanceof ApiError ? err.message : "Не удалось отправить";
      showToast(msg);
    }
  }

  onMounted(load);
  return { entries, author, message, onSubmit };
}
