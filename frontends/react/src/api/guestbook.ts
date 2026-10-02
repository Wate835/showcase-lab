import { api } from "./client";
import type { Framework, GuestbookEntry } from "../types";

export function fetchGuestbook() {
  return api<GuestbookEntry[]>("/guestbook");
}

export function postGuestbook(payload: {
  author: string;
  message: string;
  framework: Framework;
}) {
  return api("/guestbook", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
