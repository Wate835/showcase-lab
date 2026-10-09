import type Konva from "konva";

/** vue-konva component instance exposing the underlying Konva node. */
export type KonvaNodeRef<T extends Konva.Node = Konva.Node> = {
  getNode: () => T;
} | null;
