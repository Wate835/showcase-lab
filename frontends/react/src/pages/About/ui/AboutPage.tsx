import { Link } from "react-router-dom";
import { useAbout } from "../useAbout";
import { useI18n } from "../../../utils/usePrefs";

function isInternalDemo(url: string | null | undefined): url is string {
  return Boolean(url && url.startsWith("/") && !url.startsWith("//"));
}

function CaseTitle({ title, url }: { title: string; url?: string | null }) {
  if (isInternalDemo(url)) {
    return <Link to={url}>{title}</Link>;
  }
  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer">
        {title}
      </a>
    );
  }
  return <>{title}</>;
}

export function AboutPage() {
  const { profile, cases, error } = useAbout();
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
      {cases.length > 0 && (
        <div className="cases">
          <h2>{t("about.cases")}</h2>
          <p className="lead">{t("about.casesLead")}</p>
          <div className="stack">
            {cases.map((item) => (
              <article className="card" key={item.id}>
                <h2>
                  <CaseTitle title={item.title} url={item.url} />
                </h2>
                <p className="muted">{item.year}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
