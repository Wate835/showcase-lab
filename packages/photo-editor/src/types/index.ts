export type EditorTabId = 0 | 1 | 2 | 3 | 4;

export type HistoryEntry = {
  title: string;
  src: string;
  date: number;
};

export type SaveImagePayload = {
  src: string;
};

export type EditorProps = {
  defImg: string;
  root?: HTMLDivElement;
  innerWidth?: number;
};

export type FlipPlane = "x" | "y";
