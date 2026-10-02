import { api } from "./client";
import type { Profile } from "../types";

export function fetchProfile() {
  return api<Profile>("/profile");
}
