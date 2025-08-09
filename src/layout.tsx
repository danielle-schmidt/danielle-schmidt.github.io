import { Link } from "react-router";

import "./layout.css";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Danielle Schmidt-Larios</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/research">Research</Link>
            <Link to="/teaching">Teaching</Link>
            <Link to="/outreach">Outreach</Link>
            <Link to="/resources">Resources</Link>
          </nav>
        </div>
      </div>
      <main className="page-content">{children}</main>
    </>
  );
}
