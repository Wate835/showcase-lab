import type { EditorTabId } from "../types";

export type EditorTab = {
  id: EditorTabId;
  label: string;
  icon: "sliders" | "reload" | "minimize" | "flip";
};

/** Tools in the left rail (History is a permanent right panel). */
export const EDITOR_TABS: EditorTab[] = [
  { id: 0, label: "Цвет", icon: "sliders" },
  { id: 1, label: "Поворот", icon: "reload" },
  { id: 2, label: "Кадр", icon: "minimize" },
  { id: 3, label: "Отражение", icon: "flip" },
];

export const TAB = {
  COLOR: 0,
  ROTATE: 1,
  CROP: 2,
  FLIP: 3,
  HISTORY: 4,
} as const satisfies Record<string, EditorTabId>;
