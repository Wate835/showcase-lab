import { useAbout } from "../useAbout";
import { useI18n } from "../../../utils/usePrefs";

export function AboutPage() {
  const { profile, error } = useAbout();
  const { t } = useI18n();

  if (error) return <p className="error">{error}</p>;
  if (!profile) return <p className="muted">{t("about.loading")}</p>;

  return (
    <section>
      <h1>{profile.name}</h1>
      <p className="lead">
        {profile.title} · {profile.city}
      </p>
      <p className="lead">{profile.summary}</p>
      <div className="chip-row">
        {profile.skills.map((s) => (
          <span className="chip" key={s}>
            {s}
          </span>
        ))}
      </div>
      <div className="card">
        <h2>{t("about.me")}</h2>
        <p className="msg">{profile.about}</p>
        <p className="muted" style={{ marginTop: "1rem" }}>
          <a href={profile.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>{" "}
          · <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
      <div className="stack" style={{ marginTop: "1rem" }}>
        {profile.experience.map((job) => (
          <article className="card" key={job.company + job.period}>
            <h2>
              {job.company} — {job.role}
            </h2>
            <p className="muted">{job.period}</p>
            <ul>
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
