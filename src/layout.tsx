import { Link } from "react-router";

import "./layout.css";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-header-title">Danielle Schmidt-Larios</h1>
          <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/research">Research</Link>
            <Link to="/teaching">Teaching</Link>
            <Link to="/outreach">Outreach</Link>
            <Link to="/resources">Resources</Link>
          </nav>
        </div>
      </div>
      
      <main className="page-content">{children}</main>
      
      <div className="site-footer">
        <div className="footer-column footer-left">
          <img src="/UW logo.png" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-column footer-left">
          <img src="/CESoc Transparent Logo.png" alt="Logo" className="footer-logo" />
          </div>   
        <div className="footer-column footer-center">
          <a href="mailto:dschmidt25@wisc.edu">dschmidt25@wisc.edu</a>
        </div>
      
        <div className="footer-column footer-right">
          <a href="https://scholar.google.com/citations?hl=en&user=AoBIat0AAAAJ&view_op=list_works&authuser=3&gmla=AElLoL22V6QNE-ChvWsjMwDVYIQAne_Lg4kkHPgLgjG1_aDKDZX4KPxivdvgdPXXmqEcDYKTNsolN0zQOmnbbgTX" target="_blank">
            <img src="/icons/scholar.svg" alt="Scholar" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/danielle-schmidt-2019/" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://github.com/danielle-schmidt" target="_blank">
            <img src="/icons/github.svg" alt="GitHub" className="footer-icon" />
          </a>
        </div>
      </div>
    </>
  );
}
