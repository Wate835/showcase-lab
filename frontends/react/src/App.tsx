import { createElement, useEffect, useState, type ComponentType } from "react";
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
import { useI18n, useTheme } from "./utils/usePrefs";
import { CONTACTS } from "@shared/site.js";

const PAGES: Record<RouteName, ComponentType> = {
  about: AboutPage,
  photoEditor: PhotoEditorPage,
  bugs: BugHuntPage,
  incidents: IncidentsPage,
  guestbook: GuestbookPage,
};

function AppShell() {
  const location = useLocation();
  const { t, locale, toggleLocale } = useI18n();
  const { toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const current =
      ROUTES.find((r) => r.path === location.pathname) ?? ROUTES[0];
    document.title = t("shell.docTitle", { page: t(`nav.${current.name}`) });
  }, [location.pathname, locale, t]);

  useEffect(() => {
    document.documentElement.classList.toggle("is-nav-open", navOpen);
    return () => {
      document.documentElement.classList.remove("is-nav-open");
    };
  }, [navOpen]);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    const desktopNavMq = window.matchMedia("(min-width: 860px)");
    const onDesktopNavChange = (event: MediaQueryListEvent) => {
      if (event.matches) setNavOpen(false);
    };

    window.addEventListener("keydown", onKeydown);
    if (typeof desktopNavMq.addEventListener === "function") {
      desktopNavMq.addEventListener("change", onDesktopNavChange);
    } else {
      desktopNavMq.addListener(onDesktopNavChange);
    }

    return () => {
      window.removeEventListener("keydown", onKeydown);
      if (typeof desktopNavMq.removeEventListener === "function") {
        desktopNavMq.removeEventListener("change", onDesktopNavChange);
      } else {
        desktopNavMq.removeListener(onDesktopNavChange);
      }
    };
  }, []);

  const closeNav = () => setNavOpen(false);
  const menuLabel = navOpen ? t("shell.menuClose") : t("shell.menuOpen");
  const onLogoClick = () => {
    if (location.pathname === "/") closeNav();
  };
  const onNavClick = (path: string) => {
    const atPath =
      path === "/" ? location.pathname === "/" : location.pathname === path;
    if (atPath) closeNav();
  };

  return (
    <div className={`shell ${styles.shell}`}>
      <a className="skip-link" href="#main-content">
        {t("shell.skipToContent")}
      </a>
      <header className={`topbar${navOpen ? " is-nav-open" : ""}`}>
        <NavLink className={`logo ${styles.logo}`} to="/" end onClick={onLogoClick}>
          Showcase Lab
        </NavLink>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="menu-panel"
          aria-label={menuLabel}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
        <div id="menu-panel" className="menu-panel">
          <nav className={`nav ${styles.nav}`}>
            {ROUTES.map((r) => (
              <NavLink
                key={r.name}
                to={r.path}
                end={r.path === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                onClick={() => onNavClick(r.path)}
              >
                {t(`nav.${r.name}`)}
              </NavLink>
            ))}
          </nav>
          <div className="topbar-controls">
            <button
              type="button"
              className={`switch switch--icon ${styles.switch}`}
              aria-label={t("shell.themeAria")}
              data-tip={t("shell.themeAria")}
              onClick={toggleTheme}
            >
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
              </svg>
            </button>
            <button
              type="button"
              className={`switch ${styles.switch}`}
              aria-label={`${locale === "en" ? t("shell.localeToEn") : t("shell.localeToRu")} — ${t("shell.localeAria")}`}
              onClick={toggleLocale}
            >
              {locale === "en" ? t("shell.localeToEn") : t("shell.localeToRu")}
            </button>
            <a
              className={`switch switch--icon ${styles.switch}`}
              href="/?choose=1"
              aria-label={t("shell.switchStack")}
              data-tip={t("shell.switchStack")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2 3 7l9 5 9-5-9-5z" />
                <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <main id="main-content" className="content" tabIndex={-1}>
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
        <nav className="footer-contacts" aria-label={t("landing.contactsAria")}>
          <a href={CONTACTS.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          <a href={CONTACTS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
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
