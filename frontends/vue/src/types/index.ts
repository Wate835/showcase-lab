export type Framework = "vanilla" | "react" | "vue";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Profile = {
  name: string;
  title: string;
  city: string;
  summary: string;
  about: string;
  email: string;
  telegram: string;
  github: string;
  skills: string[];
  experience: ExperienceItem[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
  url?: string | null;
};

export type Score = {
  id: number;
  player_name: string;
  time_ms: number;
  framework: Framework;
  created_at: string;
};

export type Incident = {
  id: number;
  title: string;
  severity: string;
  service: string;
  description: string;
  resolved: boolean;
  created_at: string;
};

export type GuestbookEntry = {
  id: number;
  author: string;
  message: string;
  framework: Framework;
  created_at: string;
};

export type ChallengeFix = {
  id: string;
  code: string;
};

export type Challenge = {
  id: string;
  file: string;
  title: string;
  hint: string;
  lines: string[];
  fixes: ChallengeFix[];
};

export type ChallengesResponse = {
  framework: Framework;
  total: number;
  items: Challenge[];
};
