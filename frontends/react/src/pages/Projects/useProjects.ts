import { useEffect, useState } from "react";
import { fetchProjects } from "../../api";
import type { Project } from "../../types";
import { useI18n } from "../../utils/usePrefs";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState("");
  const { locale, t } = useI18n();

  useEffect(() => {
    setError("");
    fetchProjects()
      .then(setProjects)
      .catch((e: Error) => setError(e.message || t("common.loadingError")));
  }, [locale, t]);

  return { projects, error };
}
