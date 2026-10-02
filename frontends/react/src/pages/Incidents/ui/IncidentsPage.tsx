import { useIncidents } from "../useIncidents";

export function IncidentsPage() {
  const { visible, openCount, liveMode, updatedAt, leavingIds, resolveItem } = useIncidents();

  return (
    <section>
      <h1>Incident Board</h1>
      <p className="lead">
        Фейковый DevOps-монитор. Открыто: <strong>{openCount}</strong>. Live:{" "}
        <strong>{liveMode}</strong>
        {updatedAt ? <> · {updatedAt}</> : null}
      </p>
      <div className="stack">
        {visible.map((item) => (
          <article
            className={`card incident-card ${leavingIds.includes(item.id) ? "is-leaving" : ""}`}
            key={item.id}
          >
            <div className="row">
              <div>
                <span className={`severity ${item.severity}`}>{item.severity}</span>
                <h2 style={{ display: "inline", marginLeft: ".5rem" }}>{item.title}</h2>
                <p className="muted">{item.service}</p>
                <p className="msg">{item.description}</p>
              </div>
              <button
                className="btn"
                disabled={leavingIds.includes(item.id)}
                onClick={() => resolveItem(item.id)}
              >
                Resolve
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
