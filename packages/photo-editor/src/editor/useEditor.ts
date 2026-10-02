import { onBeforeUnmount, onMounted, ref } from "vue";

import { EDITOR_TABS, TAB } from "../constants/tabs";
import type { EditorProps, EditorTabId, SaveImagePayload } from "../types";
import { formatHistoryTime } from "../utils/formatHistoryTime";
import { useCanvas } from "./useCanvas";
import { useColorAdjust } from "./useColorAdjust";
import { useHistory } from "./useHistory";
import { useTransform } from "./useTransform";

export function useEditor(
  props: EditorProps,
  emit: {
    (e: "saveImage", data: SaveImagePayload): void;
    (e: "close"): void;
  },
) {
  const dirty = ref(false);
  const activeTab = ref<EditorTabId>(TAB.COLOR);

  const canvas = useCanvas();
  const history = useHistory();

  const color = useColorAdjust({
    imageObj: canvas.imageObj,
    imageConfig: canvas.imageConfig,
    layout: canvas.layout,
    dirty,
  });

  const transform = useTransform({
    imageNode: canvas.imageNode,
    imageObj: canvas.imageObj,
    imageConfig: canvas.imageConfig,
    stageRef: canvas.stageRef,
    dimLayer: canvas.dimLayer,
    rectRef: canvas.rectRef,
    tranRef: canvas.tranRef,
    scale: canvas.scale,
    getImageBounds: canvas.getImageBounds,
  });

  async function loadHistoryEntry(index: number) {
    const entry = history.historyImage.value[index];
    if (!entry) return;
    color.reset();
    await canvas.loadImage(entry.src);
    canvas.layout();
  }

  async function navigateHistory(delta: number) {
    if (history.historyIndex.value == null) return;
    if (delta > 0 && history.historyIndex.value >= history.historyImage.value.length - 1) return;
    if (delta < 0 && history.historyIndex.value <= 0) return;

    history.historyIndex.value += delta;
    await loadHistoryEntry(history.historyIndex.value);
  }

  async function restoreHistory(index: number) {
    history.historyIndex.value = index;
    await loadHistoryEntry(index);
  }

  /** Bake rotate / flip / crop (geometry) into history. */
  async function saveGeometryChanges(title = history.title.value) {
    const image = canvas.getKonvaImage();
    if (!image) return;

    const oldScaleX = image.attrs.scaleX;
    const oldScaleY = image.attrs.scaleY;
    image.attrs.scaleX = image.attrs.scaleX < 0 ? -1 : 1;
    image.attrs.scaleY = image.attrs.scaleY < 0 ? -1 : 1;

    let changedImg: string;
    if (canvas.tranRef.value && transform.selected.value) {
      image.clearCache();
      const transformer = canvas.tranRef.value.getNode();
      changedImg = image.toDataURL({
        x:
          (transformer.x() - (canvas.configStage.value.width - transform.rectCrop.value.width) / 2) /
            oldScaleX +
          image.x() -
          canvas.imageConfig.value.offsetX,
        y:
          (transformer.y() -
            (canvas.configStage.value.height - transform.rectCrop.value.height) / 2) /
            oldScaleY +
          image.y() -
          canvas.imageConfig.value.offsetY,
        width: transformer.width() / oldScaleX,
        height: transformer.height() / oldScaleY,
        mimeType: "image/jpeg",
      });
    } else {
      image.clearCache();
      changedImg = image.toDataURL({ mimeType: "image/jpeg" });
    }

    transform.selected.value = false;
    history.addHistory(title, changedImg);
    await canvas.loadImage(changedImg);
    color.reset();
    image.getLayer()?.batchDraw();
    canvas.layout();
  }

  async function applyColorAdjustments() {
    if (!color.hasAdjustments.value) return;
    const url = await color.bakeToDataURL();
    if (!url) return;
    history.addHistory("Коррекция", url);
    await canvas.loadImage(url);
    color.reset();
    dirty.value = false;
    canvas.layout();
  }

  async function flushDirty() {
    if (!dirty.value) return;
    if (activeTab.value === TAB.COLOR && color.hasAdjustments.value) {
      await applyColorAdjustments();
      return;
    }
    await saveGeometryChanges(history.title.value);
    dirty.value = false;
  }

  async function changeTab(tabId: EditorTabId, label: string) {
    if (
      (activeTab.value === TAB.HISTORY || dirty.value) &&
      history.historyImage.value.length > 1 &&
      history.historyIndex.value != null
    ) {
      history.truncateAfterCurrent();
    }
    await flushDirty();
    activeTab.value = tabId;
    history.title.value = label;
    dirty.value = false;
  }

  function markDirtyAndRotate(deg: number) {
    dirty.value = true;
    transform.rotate(deg);
  }

  function markDirtyAndFlip(plane: "x" | "y") {
    transform.flip(plane);
    dirty.value = true;
  }

  function markDirtyAndCrop() {
    transform.selectImage();
    dirty.value = true;
  }

  async function applyCrop() {
    await changeTab(TAB.CROP, "Обрезка");
  }

  async function onSaveExport() {
    await flushDirty();
    const image = canvas.getKonvaImage();
    if (!image) return;
    // Ensure we export the committed base, not a downscaled color preview
    color.showBase();
    emit("saveImage", {
      src: image.toDataURL({ mimeType: "image/jpeg" }),
    });
  }

  onMounted(async () => {
    await canvas.loadImage(props.defImg);
    history.addHistory("Оригинал", canvas.imageObj.value?.src as string);
    history.title.value = "Цвет";
    // Wait for layout so stageWrapper has real size
    requestAnimationFrame(() => canvas.layout());
  });

  onMounted(() => {
    const resizeObserver = new ResizeObserver(() => {
      canvas.layout();
    });

    const bind = () => {
      if (canvas.stageWrapper.value) {
        resizeObserver.observe(canvas.stageWrapper.value);
      }
    };
    requestAnimationFrame(bind);

    window.addEventListener("resize", canvas.layout);

    onBeforeUnmount(() => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", canvas.layout);
    });
  });

  return {
    EDITOR_TABS,
    TAB,
    dirty,
    activeTab,
    formatHistoryTime,
    ...canvas,
    historyImage: history.historyImage,
    historyIndex: history.historyIndex,
    title: history.title,
    colorParams: color.params,
    hasAdjustments: color.hasAdjustments,
    comparing: color.comparing,
    colorRendering: color.rendering,
    resetColor: color.reset,
    setComparing: color.setComparing,
    applyColorAdjustments,
    selected: transform.selected,
    rectCrop: transform.rectCrop,
    tranConfig: transform.tranConfig,
    dimShapeConfig: transform.dimShapeConfig,
    navigateHistory,
    restoreHistory,
    changeTab,
    markDirtyAndRotate,
    markDirtyAndFlip,
    markDirtyAndCrop,
    applyCrop,
    onSaveExport,
  };
}
