import { useIncidents } from "../useIncidents";
import { useI18n } from "../../../utils/usePrefs";

export function IncidentsPage() {
  const { visible, openCount, liveMode, updatedAt, leavingIds, resolveItem } = useIncidents();
  const { t } = useI18n();

  return (
    <section>
      <h1>{t("incidents.title")}</h1>
      <p className="lead">
        {t("incidents.intro")} {t("incidents.open")} <strong>{openCount}</strong>. {t("incidents.live")}{" "}
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
                {t("incidents.resolve")}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
