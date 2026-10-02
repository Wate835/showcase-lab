import { onMounted, ref } from "vue";
import { fetchProjects } from "../../api";
import type { Project } from "../../types";

export function useProjects() {
  const projects = ref<Project[]>([]);
  const error = ref("");

  onMounted(async () => {
    try {
      projects.value = await fetchProjects();
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Error";
    }
  });

  return { projects, error };
}
