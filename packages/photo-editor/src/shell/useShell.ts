import { ref } from "vue";
import { useObjectUrl } from "@vueuse/core";

import { downloadUrl } from "../utils/download";

export function useShell() {
  const file = ref<string | null>(null);
  const isLoad = ref(false);
  const filesRef = ref<HTMLInputElement>();

  function submitFile() {
    filesRef.value?.click();
  }

  function handleFileUpload(e: Event) {
    const input = e.target as HTMLInputElement;
    const picked = input.files?.[0];
    if (!picked) return;
    isLoad.value = false;
    file.value = useObjectUrl(picked).value ?? null;
    input.value = "";
    isLoad.value = true;
  }

  function onClose() {
    file.value = null;
    isLoad.value = false;
  }

  function saveImage(payload: { src: string }) {
    downloadUrl("photo-editor.jpg", payload.src);
  }

  return {
    file,
    isLoad,
    filesRef,
    submitFile,
    handleFileUpload,
    onClose,
    saveImage,
  };
}
