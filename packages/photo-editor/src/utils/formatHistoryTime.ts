export function formatHistoryTime(date: number): string {
  const d = new Date(date);
  const hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
