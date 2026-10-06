import { ref, watch } from "vue";
import { fetchProjects } from "../../api";
import type { Project } from "../../types";
import { useI18n } from "../../utils/usePrefs";

export function useProjects() {
  const projects = ref<Project[]>([]);
  const error = ref("");
  const { locale, t } = useI18n();

  async function load() {
    error.value = "";
    try {
      projects.value = await fetchProjects();
    } catch (e) {
      error.value = e instanceof Error ? e.message : t("common.loadingError");
    }
  }

  watch(locale, load, { immediate: true });

  return { projects, error };
}
