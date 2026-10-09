import { ref, watch } from "vue";
import { fetchProfile, fetchProjects } from "../../api";
import type { Profile, Project } from "../../types";
import { useI18n } from "../../utils/usePrefs";

export function useAbout() {
  const profile = ref<Profile | null>(null);
  const cases = ref<Project[]>([]);
  const error = ref("");
  const { locale, t } = useI18n();

  async function load() {
    error.value = "";
    try {
      const [nextProfile, nextCases] = await Promise.all([fetchProfile(), fetchProjects()]);
      profile.value = nextProfile;
      cases.value = nextCases;
    } catch (e) {
      error.value = e instanceof Error ? e.message : t("common.loadingError");
    }
  }

  watch(locale, load, { immediate: true });

  return { profile, cases, error };
}
