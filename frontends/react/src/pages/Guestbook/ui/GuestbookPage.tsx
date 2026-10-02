import { useGuestbook } from "../useGuestbook";

export function GuestbookPage() {
  const { entries, author, setAuthor, message, setMessage, onSubmit } = useGuestbook();

  return (
    <section>
      <h1>Guestbook</h1>
      <p className="lead">Оставь след. Сообщение пишется в SQLite.</p>
      <form className="form card" onSubmit={onSubmit}>
        <label>
          Имя
          <input value={author} maxLength={40} required onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          Сообщение
          <textarea
            value={message}
            rows={3}
            maxLength={500}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className="btn" type="submit">
          Отправить
        </button>
      </form>
      <div className="stack" style={{ marginTop: "1rem" }}>
        {entries.map((e) => (
          <article className="card" key={e.id}>
            <strong>{e.author}</strong>
            <span className="muted">
              {" "}
              · {e.framework} · {new Date(e.created_at).toLocaleString()}
            </span>
            <p className="msg">{e.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
