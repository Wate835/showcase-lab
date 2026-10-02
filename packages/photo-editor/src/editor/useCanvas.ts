import { nextTick, ref, type Ref } from "vue";
import Konva from "konva";

import { loadImageElement } from "../utils/loadImageElement";

/** Space around the image so crop anchors stay inside the stage hit-area */
export const STAGE_PAD = 28;

export function useCanvas() {
  const isLoading = ref(true);
  const imageObj = ref<HTMLImageElement | null>(null);
  const stageRef = ref();
  const layerRef = ref();
  const dimLayer = ref();
  const imageNode = ref();
  const tranRef = ref();
  const rectRef = ref();
  const stageWrapper = ref<HTMLDivElement>();

  const configStage = ref({ width: 400, height: 400 });
  const imageConfig = ref({
    x: 0,
    y: 0,
    image: new Image(),
    width: 0,
    height: 0,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    scaleX: 1,
    scaleY: 1,
  });

  function fitScale(baseW: number, baseH: number, rotation = 0) {
    if (!stageWrapper.value) return 1;
    const availW = Math.max(1, stageWrapper.value.clientWidth - STAGE_PAD * 2);
    const availH = Math.max(1, stageWrapper.value.clientHeight - STAGE_PAD * 2);
    const rot = ((rotation % 360) + 360) % 360;
    const swapped = rot === 90 || rot === 270;
    const fitW = swapped ? baseH : baseW;
    const fitH = swapped ? baseW : baseH;
    if (fitW > availW || fitH > availH) {
      return Math.min(availW / fitW, availH / fitH);
    }
    return 1;
  }

  function setParams(opts: { resetRotation?: boolean } = {}) {
    if (!imageObj.value || !stageWrapper.value) return;

    const base = imageObj.value;
    const w = base.naturalWidth || base.width;
    const h = base.naturalHeight || base.height;

    configStage.value.width = Math.max(1, stageWrapper.value.clientWidth);
    configStage.value.height = Math.max(1, stageWrapper.value.clientHeight);

    // Always layout from the committed base image, even if preview bitmap differs
    imageConfig.value.width = w;
    imageConfig.value.height = h;
    imageConfig.value.offsetX = w / 2;
    imageConfig.value.offsetY = h / 2;
    imageConfig.value.x = configStage.value.width / 2;
    imageConfig.value.y = configStage.value.height / 2;
    if (opts.resetRotation) {
      imageConfig.value.rotation = 0;
    }

    const s = fitScale(w, h, imageConfig.value.rotation);
    if (opts.resetRotation) {
      imageConfig.value.scaleX = s;
      imageConfig.value.scaleY = s;
    } else {
      const signX = Math.sign(imageConfig.value.scaleX || 1) || 1;
      const signY = Math.sign(imageConfig.value.scaleY || 1) || 1;
      imageConfig.value.scaleX = s * signX;
      imageConfig.value.scaleY = s * signY;
    }
  }

  function layout() {
    setParams();
    scale();
    const node = imageNode.value?.getNode() as Konva.Image | undefined;
    node?.getLayer()?.batchDraw();
  }

  function scale() {
    if (!imageObj.value || !stageWrapper.value || !imageNode.value) return;

    const img = imageObj.value;
    const node = imageNode.value.getNode() as Konva.Image;
    const baseW = img.naturalWidth || img.width;
    const baseH = img.naturalHeight || img.height;

    // Keep Konva node size locked to base (preview textures may be smaller)
    node.width(baseW);
    node.height(baseH);
    node.offsetX(baseW / 2);
    node.offsetY(baseH / 2);
    node.x(configStage.value.width / 2);
    node.y(configStage.value.height / 2);

    const signX =
      Math.sign(imageConfig.value.scaleX || node.scaleX() || 1) || 1;
    const signY =
      Math.sign(imageConfig.value.scaleY || node.scaleY() || 1) || 1;

    const s = fitScale(baseW, baseH, Number(imageConfig.value.rotation) || 0);
    const sx = s * signX;
    const sy = s * signY;

    imageConfig.value.scaleX = sx;
    imageConfig.value.scaleY = sy;
    node.scaleX(sx);
    node.scaleY(sy);
    node.clearCache();
  }

  /** Axis-aligned image bounds on the stage (after scale/position). */
  function getImageBounds(): { x: number; y: number; width: number; height: number } | null {
    const node = imageNode.value?.getNode() as Konva.Image | undefined;
    if (!node) return null;
    const rect = node.getClientRect({ skipShadow: true, skipStroke: true });
    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    };
  }

  async function loadImage(src: string) {
    isLoading.value = true;
    try {
      const image = await loadImageElement(src);
      imageObj.value = image;
      imageConfig.value.image = image;
      // Fit scale into reactive config BEFORE the stage becomes visible
      setParams({ resetRotation: true });
      await nextTick();
      scale();
    } finally {
      isLoading.value = false;
      // Quiet pass after reveal; scale already correct → no visible jump
      await nextTick();
      requestAnimationFrame(() => layout());
    }
  }

  function getKonvaImage(): Konva.Image | null {
    return imageNode.value?.getNode() ?? null;
  }

  return {
    isLoading,
    imageObj,
    stageRef,
    layerRef,
    dimLayer,
    imageNode,
    tranRef,
    rectRef,
    stageWrapper,
    configStage,
    imageConfig,
    setParams,
    scale,
    layout,
    loadImage,
    getKonvaImage,
    getImageBounds,
  };
}

export type CanvasApi = ReturnType<typeof useCanvas>;
export type MaybeRefNode = Ref<any>;
