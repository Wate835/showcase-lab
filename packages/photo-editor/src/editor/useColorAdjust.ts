import { computed, reactive, ref, watch, type Ref } from "vue";
import { useDebounceFn } from "@vueuse/core";

import {
  DEFAULT_RAW_PARAMS,
  developImageToDataURL,
  isIdentityRawParams,
  type CameraRawParams,
} from "../utils/cameraRawDevelop";
import { loadImageElement } from "../utils/loadImageElement";

type ColorAdjustDeps = {
  imageObj: Ref<HTMLImageElement | null>;
  imageConfig: Ref<{ image: CanvasImageSource; [key: string]: unknown }>;
  layout: () => void;
  dirty: Ref<boolean>;
};

const PREVIEW_MAX_EDGE = 1400;

export function useColorAdjust(deps: ColorAdjustDeps) {
  const { imageObj, imageConfig, layout, dirty } = deps;

  const params = reactive<CameraRawParams>({ ...DEFAULT_RAW_PARAMS });
  const comparing = ref(false);
  const rendering = ref(false);
  let renderToken = 0;

  const hasAdjustments = computed(() => !isIdentityRawParams(params));

  function showBase() {
    if (!imageObj.value) return;
    imageConfig.value.image = imageObj.value;
    layout();
  }

  async function renderPreview() {
    const base = imageObj.value;
    if (!base) return;

    const token = ++renderToken;
    if (comparing.value || !hasAdjustments.value) {
      showBase();
      return;
    }

    rendering.value = true;
    try {
      const dataUrl = developImageToDataURL(base, { ...params }, { maxEdge: PREVIEW_MAX_EDGE });
      if (token !== renderToken) return;
      const img = await loadImageElement(dataUrl);
      if (token !== renderToken) return;
      imageConfig.value.image = img;
      // Re-lock size/position to base so a smaller preview bitmap doesn't drift
      layout();
    } finally {
      if (token === renderToken) rendering.value = false;
    }
  }

  const schedulePreview = useDebounceFn(() => {
    void renderPreview();
  }, 50);

  watch(
    params,
    () => {
      dirty.value = hasAdjustments.value;
      schedulePreview();
    },
    { deep: true },
  );

  watch(comparing, () => {
    void renderPreview();
  });

  function reset() {
    comparing.value = false;
    Object.assign(params, DEFAULT_RAW_PARAMS);
    dirty.value = false;
    showBase();
  }

  function setComparing(on: boolean) {
    comparing.value = on;
  }

  async function bakeToDataURL(): Promise<string | null> {
    const base = imageObj.value;
    if (!base || !hasAdjustments.value) return null;
    comparing.value = false;
    return developImageToDataURL(base, { ...params }, { maxEdge: Infinity, quality: 0.95 });
  }

  return {
    params,
    comparing,
    rendering,
    hasAdjustments,
    reset,
    setComparing,
    bakeToDataURL,
    showBase,
    schedulePreview,
  };
}

export type { CameraRawParams };
