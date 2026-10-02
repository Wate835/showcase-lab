import { api } from "./client";
import type { Project } from "../types";

export function fetchProjects() {
  return api<Project[]>("/projects");
}
