import { createElement, type ComponentType } from "react";
import {
  HashRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import styles from "./app.module.css";
import { ROUTES, type RouteName } from "./constants/routes";
import { AboutPage } from "./pages/About";
import { BugHuntPage } from "./pages/BugHunt";
import { GuestbookPage } from "./pages/Guestbook";
import { IncidentsPage } from "./pages/Incidents";
import { PhotoEditorPage } from "./pages/PhotoEditor";
import { ProjectsPage } from "./pages/Projects";
import { useI18n, useTheme } from "./utils/usePrefs";

const PAGES: Record<RouteName, ComponentType> = {
  about: AboutPage,
  projects: ProjectsPage,
  photoEditor: PhotoEditorPage,
  bugs: BugHuntPage,
  incidents: IncidentsPage,
  guestbook: GuestbookPage,
};

function AppShell() {
  const location = useLocation();
  const { t, locale, toggleLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`shell ${styles.shell}`}>
      <header className="topbar">
        <NavLink className={`logo ${styles.logo}`} to="/" end>
          Showcase Lab
        </NavLink>
        <nav className={`nav ${styles.nav}`}>
          {ROUTES.map((r) => (
            <NavLink
              key={r.name}
              to={r.path}
              end={r.path === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {t(`nav.${r.name}`)}
            </NavLink>
          ))}
        </nav>
        <div className="topbar-controls">
          <button
            type="button"
            className={`switch ${styles.switch}`}
            aria-label={t("shell.themeAria")}
            onClick={toggleTheme}
          >
            {theme === "dark" ? t("shell.themeToLight") : t("shell.themeToDark")}
          </button>
          <button
            type="button"
            className={`switch ${styles.switch}`}
            aria-label={t("shell.localeAria")}
            onClick={toggleLocale}
          >
            {locale === "ru" ? t("shell.localeToEn") : t("shell.localeToRu")}
          </button>
          <a className={`switch ${styles.switch}`} href="/?choose=1">
            {t("shell.switchStack")}
          </a>
        </div>
      </header>
      <main className="content">
        <div key={location.pathname} className="page">
          <Routes location={location}>
            {ROUTES.map((r) => (
              <Route key={r.name} path={r.path} element={createElement(PAGES[r.name])} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <span className="badge">React · cyan</span>
        <span>{t("shell.footerApi")}</span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
