import { useGuestbook } from "../useGuestbook";
import { useI18n } from "../../../utils/usePrefs";

export function GuestbookPage() {
  const { entries, author, setAuthor, message, setMessage, onSubmit, error, loading } =
    useGuestbook();
  const { t, locale } = useI18n();

  return (
    <section>
      <h1>{t("guestbook.title")}</h1>
      <p className="lead">{t("guestbook.lead")}</p>
      {error ? (
        <p className="error" role="alert" aria-live="polite">
          {error}
        </p>
      ) : null}
      {loading && !error ? <p className="muted">{t("guestbook.loading")}</p> : null}
      <form className="form card" onSubmit={onSubmit}>
        <label>
          {t("guestbook.name")}
          <input value={author} maxLength={40} required onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          {t("guestbook.message")}
          <textarea
            value={message}
            rows={3}
            maxLength={500}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className="btn" type="submit">
          {t("guestbook.submit")}
        </button>
      </form>
      <div className="stack" style={{ marginTop: "1rem" }}>
        {entries.map((e) => (
          <article className="card" key={e.id}>
            <strong>{e.author}</strong>
            <span className="muted">
              {" "}
              · {e.framework} ·{" "}
              {new Date(e.created_at).toLocaleString(locale === "en" ? "en-US" : "ru-RU")}
            </span>
            <p className="msg">{e.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
