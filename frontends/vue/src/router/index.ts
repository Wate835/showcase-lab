import type { Component } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { ROUTES, type RouteName } from "../constants/routes";
import { AboutPage } from "../pages/About";
import { BugHuntPage } from "../pages/BugHunt";
import { GuestbookPage } from "../pages/Guestbook";
import { IncidentsPage } from "../pages/Incidents";
import { PhotoEditorPage } from "../pages/PhotoEditor";

const PAGES: Record<RouteName, Component> = {
  about: AboutPage,
  photoEditor: PhotoEditorPage,
  bugs: BugHuntPage,
  incidents: IncidentsPage,
  guestbook: GuestbookPage,
};

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...ROUTES.map((r) => ({
      path: r.path,
      name: r.name,
      component: PAGES[r.name],
    })),
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
