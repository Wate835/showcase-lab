import { onMounted, ref } from "vue";
import { fetchProfile } from "../../api";
import type { Profile } from "../../types";

export function useAbout() {
  const profile = ref<Profile | null>(null);
  const error = ref("");

  onMounted(async () => {
    try {
      profile.value = await fetchProfile();
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Error";
    }
  });

  return { profile, error };
}
