import { useEffect, useState } from "react";
import { fetchProfile, fetchProjects } from "../../api";
import type { Profile, Project } from "../../types";
import { useI18n } from "../../utils/usePrefs";

export function useAbout() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [cases, setCases] = useState<Project[]>([]);
  const [error, setError] = useState("");
  const { locale, t } = useI18n();

  useEffect(() => {
    setError("");
    Promise.all([fetchProfile(), fetchProjects()])
      .then(([nextProfile, nextCases]) => {
        setProfile(nextProfile);
        setCases(nextCases);
      })
      .catch((e: Error) => setError(e.message || t("common.loadingError")));
  }, [locale, t]);

  return { profile, cases, error };
}
