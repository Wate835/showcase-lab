export function downloadUrl(name: string, url: string) {
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", name);
  link.setAttribute("target", "_blank");
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
