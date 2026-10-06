import { useEffect, useState } from "react";
import { fetchProfile } from "../../api";
import type { Profile } from "../../types";
import { useI18n } from "../../utils/usePrefs";

export function useAbout() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState("");
  const { locale, t } = useI18n();

  useEffect(() => {
    setError("");
    fetchProfile()
      .then(setProfile)
      .catch((e: Error) => setError(e.message || t("common.loadingError")));
  }, [locale, t]);

  return { profile, error };
}
