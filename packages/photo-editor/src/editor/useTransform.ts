import { nextTick, onBeforeUnmount, ref, watch, type Ref } from "vue";
import { useThrottleFn } from "@vueuse/core";
import Konva from "konva";

import type { FlipPlane } from "../types";

type Bounds = { x: number; y: number; width: number; height: number };

type TransformDeps = {
  imageNode: Ref<any>;
  imageObj: Ref<HTMLImageElement | null>;
  imageConfig: Ref<{
    width: number;
    height: number;
    rotation: number;
    [key: string]: unknown;
  }>;
  stageRef: Ref<any>;
  dimLayer: Ref<any>;
  rectRef: Ref<any>;
  tranRef: Ref<any>;
  scale: () => void;
  getImageBounds: () => Bounds | null;
};

const MIN_CROP = 24;
const ANCHOR_SIZE = 16;
const ANCHOR_HIT = 22;

type Box = { x: number; y: number; width: number; height: number; rotation: number };

function clampBox(box: Box, bounds: Bounds): Box | null {
  let { x, y, width, height, rotation } = box;

  if (width < 0) {
    x += width;
    width = Math.abs(width);
  }
  if (height < 0) {
    y += height;
    height = Math.abs(height);
  }

  const maxX = bounds.x + bounds.width;
  const maxY = bounds.y + bounds.height;

  width = Math.min(Math.max(width, MIN_CROP), bounds.width);
  height = Math.min(Math.max(height, MIN_CROP), bounds.height);

  x = Math.max(bounds.x, Math.min(x, maxX - width));
  y = Math.max(bounds.y, Math.min(y, maxY - height));

  // Snap to full bounds when within 1px (avoids “almost full” stuck state)
  if (Math.abs(x - bounds.x) < 1) x = bounds.x;
  if (Math.abs(y - bounds.y) < 1) y = bounds.y;
  if (Math.abs(x + width - maxX) < 1) width = maxX - x;
  if (Math.abs(y + height - maxY) < 1) height = maxY - y;

  if (width < MIN_CROP || height < MIN_CROP) return null;
  return { x, y, width, height, rotation };
}

/** Keep size fixed while dragging the crop rect inside the image. */
function clampDragPosition(
  x: number,
  y: number,
  width: number,
  height: number,
  bounds: Bounds,
) {
  const w = Math.max(MIN_CROP, Math.abs(width));
  const h = Math.max(MIN_CROP, Math.abs(height));
  const maxX = bounds.x + bounds.width - w;
  const maxY = bounds.y + bounds.height - h;
  return {
    x: Math.max(bounds.x, Math.min(x, Math.max(bounds.x, maxX))),
    y: Math.max(bounds.y, Math.min(y, Math.max(bounds.y, maxY))),
  };
}

export function useTransform(deps: TransformDeps) {
  const {
    imageNode,
    imageObj,
    imageConfig,
    stageRef,
    dimLayer,
    rectRef,
    tranRef,
    scale,
    getImageBounds,
  } = deps;

  const selected = ref(false);
  let transformBound = false;

  const rectCrop = ref({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
    fill: "rgba(0,0,0,0.01)",
    stroke: "#3B82F6",
    strokeWidth: 1,
    strokeScaleEnabled: false,
    draggable: true,
    hitStrokeWidth: 0,
  });

  const dimShapeConfig = ref({
    listening: false,
    perfectDrawEnabled: false,
    sceneFunc: (ctx: Konva.Context) => {
      const stage = stageRef.value?.getNode() as Konva.Stage | undefined;
      const rect = rectRef.value?.getNode() as Konva.Rect | undefined;
      if (!stage || !rect) return;

      const holeW = Math.max(1, rect.width() * rect.scaleX());
      const holeH = Math.max(1, rect.height() * rect.scaleY());

      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, stage.width(), stage.height());
      ctx.rect(rect.x(), rect.y(), holeW, holeH);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
      ctx.fill("evenodd");
      ctx.restore();
    },
  });

  const tranConfig = ref({
    nodes: [] as Konva.Node[],
    centeredScaling: false,
    rotateEnabled: false,
    keepRatio: false,
    ignoreStroke: true,
    borderStroke: "#3B82F6",
    anchorSize: ANCHOR_SIZE,
    anchorCornerRadius: ANCHOR_SIZE / 2,
    anchorStroke: "#fff",
    anchorStrokeWidth: 1,
    anchorFill: "#3B82F6",
    enabledAnchors: [
      "top-left",
      "top-center",
      "top-right",
      "middle-right",
      "bottom-right",
      "bottom-center",
      "bottom-left",
      "middle-left",
    ],
    anchorStyleFunc: (anchor: Konva.Rect) => {
      anchor.hitFunc((ctx) => {
        const r = ANCHOR_HIT / 2;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStrokeShape(anchor);
      });
    },
    boundBoxFunc: (oldBox: Box, newBox: Box) => {
      const bounds = getImageBounds();
      if (!bounds) return oldBox;
      return clampBox(newBox, bounds) ?? oldBox;
    },
  });

  function selectImage() {
    const bounds = getImageBounds();
    if (!bounds) return;

    // Full image by default — anchors sit in STAGE_PAD outside the image edges
    rectCrop.value.x = bounds.x;
    rectCrop.value.y = bounds.y;
    rectCrop.value.width = bounds.width;
    rectCrop.value.height = bounds.height;
    selected.value = true;
  }

  function normalizeRectScale() {
    const rect = rectRef.value?.getNode() as Konva.Rect | undefined;
    const transformer = tranRef.value?.getNode() as Konva.Transformer | undefined;
    const bounds = getImageBounds();
    if (!rect || !bounds) return;

    const next = clampBox(
      {
        x: rect.x(),
        y: rect.y(),
        width: rect.width() * rect.scaleX(),
        height: rect.height() * rect.scaleY(),
        rotation: rect.rotation(),
      },
      bounds,
    );
    if (!next) return;

    rect.setAttrs({
      x: next.x,
      y: next.y,
      width: next.width,
      height: next.height,
      scaleX: 1,
      scaleY: 1,
    });
    transformer?.forceUpdate();
    dimLayer.value?.getNode()?.batchDraw();
    transformer?.getLayer()?.batchDraw();
  }

  async function bindTransformer() {
    await nextTick();
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

    const rect = rectRef.value?.getNode() as Konva.Rect | undefined;
    const transformer = tranRef.value?.getNode() as Konva.Transformer | undefined;
    const dim = dimLayer.value?.getNode() as Konva.Layer | undefined;
    if (!rect || !transformer) return;

    dim?.clipFunc(undefined as unknown as undefined);

    rect.setAttrs({
      x: rectCrop.value.x,
      y: rectCrop.value.y,
      width: rectCrop.value.width,
      height: rectCrop.value.height,
      scaleX: 1,
      scaleY: 1,
    });

    transformer.nodes([rect]);
    transformer.forceUpdate();
    transformer.getLayer()?.batchDraw();
    dim?.batchDraw();

    if (!transformBound) {
      rect.on("transform", normalizeRectScale);
      rect.on("transformend", normalizeRectScale);
      rect.on("dragmove", () => {
        const bounds = getImageBounds();
        if (!bounds) return;
        const width = rect.width() * rect.scaleX();
        const height = rect.height() * rect.scaleY();
        const next = clampDragPosition(rect.x(), rect.y(), width, height, bounds);
        rect.position({ x: next.x, y: next.y });
        transformer.forceUpdate();
        transformer.getLayer()?.batchDraw();
        dim?.batchDraw();
      });
      transformBound = true;
    }
  }

  function unbindTransformer() {
    const rect = rectRef.value?.getNode() as Konva.Rect | undefined;
    if (rect && transformBound) {
      rect.off("transform");
      rect.off("transformend");
      rect.off("dragmove");
    }
    transformBound = false;
    const transformer = tranRef.value?.getNode() as Konva.Transformer | undefined;
    transformer?.nodes([]);
  }

  watch(selected, (isSelected) => {
    if (!isSelected) {
      unbindTransformer();
      return;
    }
    void bindTransformer();
  });

  watch([rectRef, tranRef, dimLayer], () => {
    if (selected.value) void bindTransformer();
  });

  onBeforeUnmount(() => {
    unbindTransformer();
  });

  const flip = useThrottleFn((plane: FlipPlane) => {
    const node = imageNode.value?.getNode();
    if (!node) return;
    if (plane === "x") {
      node.to({ scaleX: -node.scaleX() });
    } else {
      node.to({ scaleY: -node.scaleY() });
    }
  }, 1000);

  function rotate(num: number) {
    const next = (((imageConfig.value.rotation + num) % 360) + 360) % 360;
    imageConfig.value.rotation = next;
    // Also push onto Konva node immediately (vue-konva config may lag one frame)
    const node = imageNode.value?.getNode() as Konva.Image | undefined;
    if (node) {
      node.rotation(next);
    }
    scale();
    node?.getLayer()?.batchDraw();
  }

  return {
    selected,
    rectCrop,
    tranConfig,
    dimShapeConfig,
    selectImage,
    flip,
    rotate,
  };
}
