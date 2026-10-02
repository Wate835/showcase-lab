import { useEffect, useState } from "react";
import { fetchProjects } from "../../api";
import type { Project } from "../../types";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((e: Error) => setError(e.message));
  }, []);

  return { projects, error };
}
