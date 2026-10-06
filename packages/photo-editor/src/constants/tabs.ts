import type { EditorTabId } from "../types";

export type EditorTab = {
  id: EditorTabId;
  label: string;
  icon: "sliders" | "reload" | "minimize" | "flip";
};

/** Tools in the left rail (History is a permanent right panel). */
export const EDITOR_TABS: EditorTab[] = [
  { id: 0, label: "pe.tab.color", icon: "sliders" },
  { id: 1, label: "pe.tab.rotate", icon: "reload" },
  { id: 2, label: "pe.tab.crop", icon: "minimize" },
  { id: 3, label: "pe.tab.flip", icon: "flip" },
];

export const TAB = {
  COLOR: 0,
  ROTATE: 1,
  CROP: 2,
  FLIP: 3,
  HISTORY: 4,
} as const satisfies Record<string, EditorTabId>;
