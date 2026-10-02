import { useEffect, useState } from "react";
import { fetchProfile } from "../../api";
import type { Profile } from "../../types";

export function useAbout() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile()
      .then(setProfile)
      .catch((e: Error) => setError(e.message));
  }, []);

  return { profile, error };
}
