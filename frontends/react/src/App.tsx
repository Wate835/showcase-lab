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
              {r.label}
            </NavLink>
          ))}
        </nav>
        <a className={`switch ${styles.switch}`} href="/?choose=1">
          Сменить стек
        </a>
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
        <span>API: FastAPI + SQLAlchemy</span>
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
