import { useProjects } from "../useProjects";

export function ProjectsPage() {
  const { projects, error } = useProjects();

  if (error) return <p className="error">{error}</p>;

  return (
    <section>
      <h1>Projects</h1>
      <p className="lead">Проекты и кейсы из опыта.</p>
      <div className="stack">
        {projects.map((item) => (
          <article className="card" key={item.id}>
            <h2>{item.title}</h2>
            <p className="muted">{item.year}</p>
            <p className="msg">{item.description}</p>
            {item.url ? (
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  Открыть демо
                </a>
              </p>
            ) : null}
            <div className="chip-row">
              {item.tags.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
