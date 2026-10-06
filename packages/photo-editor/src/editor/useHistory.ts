import { ref } from "vue";

import type { HistoryEntry } from "../types";

export function useHistory() {
  const historyImage = ref<HistoryEntry[]>([]);
  const historyIndex = ref<number | null>(0);
  const title = ref("pe.tab.color");

  function addHistory(entryTitle: string, src: string) {
    historyImage.value.push({
      title: entryTitle,
      src,
      date: Date.now(),
    });
    historyIndex.value = historyImage.value.length - 1;
  }

  function truncateAfterCurrent() {
    if (historyImage.value.length > 1 && historyIndex.value != null) {
      historyImage.value.splice(historyIndex.value + 1);
    }
  }

  function canNavigate(delta: number) {
    if (historyIndex.value == null) return false;
    if (historyImage.value.length <= 1) return false;
    if (delta < 0) return historyIndex.value > 0;
    return historyIndex.value < historyImage.value.length - 1;
  }

  return {
    historyImage,
    historyIndex,
    title,
    addHistory,
    truncateAfterCurrent,
    canNavigate,
  };
}
