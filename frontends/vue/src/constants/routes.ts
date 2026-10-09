export const ROUTES = [
  { path: "/", name: "about", label: "About" },
  { path: "/photo-editor", name: "photoEditor", label: "Photo Editor" },
  { path: "/bugs", name: "bugs", label: "Bug Hunt" },
  { path: "/incidents", name: "incidents", label: "Incidents" },
  { path: "/guestbook", name: "guestbook", label: "Guestbook" },
] as const;

export type RouteName = (typeof ROUTES)[number]["name"];
