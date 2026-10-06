import { useProjects } from "../useProjects";
import { useI18n } from "../../../utils/usePrefs";

export function ProjectsPage() {
  const { projects, error } = useProjects();
  const { t } = useI18n();

  if (error) return <p className="error">{error}</p>;

  return (
    <section>
      <h1>{t("projects.title")}</h1>
      <p className="lead">{t("projects.lead")}</p>
      <div className="stack">
        {projects.map((item) => (
          <article className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p className="muted">{item.year}</p>
            <p className="msg">{item.description}</p>
            {item.url ? (
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {t("projects.openDemo")}
                </a>
              </p>
            ) : null}
            <div className="chip-row">
              {item.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
