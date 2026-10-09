import { FRAMEWORK } from "../../../constants/framework";
import { formatTime } from "../../../utils/formatTime";
import { useI18n } from "../../../utils/usePrefs";
import { useBugHunt } from "../useBugHunt";

export function BugHuntPage() {
  const {
    challenges,
    scores,
    playing,
    finished,
    index,
    foundLine,
    foundBugLine,
    wrongLine,
    checking,
    elapsed,
    player,
    setPlayer,
    error,
    ch,
    start,
    onLineClick,
    onFix,
    save,
  } = useBugHunt();
  const { t } = useI18n();

  if (error)
    return (
      <p className="error" role="alert" aria-live="polite">
        {error}
      </p>
    );
  if (!challenges.length) return <p className="muted">{t("bugs.loading")}</p>;

  return (
    <section>
      <h1>{t("bugs.title")}</h1>
      <p className="lead">{t("bugs.lead", { count: challenges.length, framework: "React" })}</p>
      <div className="hunt-toolbar">
        <button className="btn" onClick={start} disabled={playing && !finished}>
          {finished || !playing ? t("bugs.start") : t("bugs.inProgress")}
        </button>
        <span className="timer">{formatTime(playing || finished ? elapsed : 0)}</span>
        <span className="muted">
          {playing || finished
            ? t("bugs.bugProgress", {
                current: Math.min(index + 1, challenges.length),
                total: challenges.length,
              })
            : t("bugs.ready")}
        </span>
      </div>
      {ch && (playing || finished) ? (
        <p className="hunt-hint">
          <strong>{t("bugs.observation")}</strong> {ch.hint || ch.title}
        </p>
      ) : (
        <p className="hunt-hint">
          <strong>{t("bugs.howToPlay")}</strong> {t("bugs.howToPlayBody")}
        </p>
      )}

      <div className="vscode">
        <div className="vscode-titlebar">
          <div className="vscode-dots">
            <span />
            <span />
            <span />
          </div>
          <span>{(playing || finished) && ch ? ch.file : "bug-hunt"} — Showcase Lab</span>
        </div>
        <div className="vscode-body">
          <aside className="vscode-sidebar">
            <div className="side-label">Explorer</div>
            {challenges.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`vscode-file ${(playing || finished) && i === index ? "current" : ""} ${(playing || finished) && i < index ? "done" : ""}`}
              >
                {c.file}
              </button>
            ))}
          </aside>
          <div className="vscode-main">
            <div className="vscode-tabs">
              <div className="vscode-tab">{(playing || finished) && ch ? ch.file : "ready"}</div>
            </div>
            <div className="vscode-editor">
              {!playing && !finished ? (
                <p className="muted" style={{ padding: "1rem" }}>
                  {t("bugs.pressStart")}
                </p>
              ) : (
                ch?.lines.map((line, i) => {
                  const n = i + 1;
                  return (
                    <button
                      key={n}
                      type="button"
                      className={[
                        "vscode-line",
                        foundLine && n === foundBugLine ? "is-found is-bug" : "",
                        wrongLine === n ? "is-wrong" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => onLineClick(n)}
                    >
                      <span className="vscode-gutter">{n}</span>
                      <span className="vscode-code">{line}</span>
                    </button>
                  );
                })
              )}
            </div>
            {playing && foundLine && ch && foundBugLine != null && (
              <div className="fix-panel">
                <h3>{t("bugs.fixPrompt", { line: foundBugLine })}</h3>
                <div className="fix-options">
                  {ch.fixes.map((f) => (
                    <button key={f.id} type="button" disabled={checking} onClick={() => onFix(f.id)}>
                      {f.code}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="vscode-status">
          <span>{(playing || finished) && ch ? ch.file : "Bug Hunt"}</span>
          <span>
            {FRAMEWORK} ·{" "}
            {playing || finished
              ? `#${Math.min(index + 1, challenges.length)}/${challenges.length}`
              : "ready"}
          </span>
        </div>
      </div>

      {finished && (
        <div className="card" style={{ marginTop: "1rem" }}>
          <h2>{t("bugs.allFixed")}</h2>
          <p className="lead">
            {t("bugs.time")} <strong>{formatTime(elapsed)}</strong>
          </p>
          <div className="form" style={{ marginTop: ".75rem" }}>
            <label>
              {t("bugs.nick")}
              <input
                value={player}
                maxLength={40}
                placeholder={t("bugs.nickPlaceholder")}
                onChange={(e) => setPlayer(e.target.value)}
              />
            </label>
            <button className="btn" type="button" onClick={save}>
              {t("bugs.saveScore")}
            </button>
          </div>
        </div>
      )}

      <h2 style={{ marginTop: "1.5rem" }}>{t("bugs.results")}</h2>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>{t("bugs.colPlayer")}</th>
              <th>{t("bugs.colTime")}</th>
              <th>{t("bugs.colFw")}</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((s, i) => (
              <tr key={s.id}>
                <td>{i + 1}</td>
                <td>{s.player_name}</td>
                <td>{formatTime(s.time_ms)}</td>
                <td>{s.framework}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
