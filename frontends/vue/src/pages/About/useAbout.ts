import { watch } from "vue";
import { fetchProfile } from "../../api";
import type { Profile } from "../../types";
import { useI18n } from "../../utils/usePrefs";
import { ref } from "vue";

export function useAbout() {
  const profile = ref<Profile | null>(null);
  const error = ref("");
  const { locale, t } = useI18n();

  async function load() {
    error.value = "";
    try {
      profile.value = await fetchProfile();
    } catch (e) {
      error.value = e instanceof Error ? e.message : t("common.loadingError");
    }
  }

  watch(locale, load, { immediate: true });

  return { profile, error };
}
