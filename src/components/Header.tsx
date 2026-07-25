import React from "react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/bio", label: "Bio" },
  { to: "/apply", label: "Apply" }
];

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <section id="hero" className="hero">
        <h1 className="hero-name">Eddie Knight</h1>
        {/* Split so each half stays whole: on narrow screens they stack as two
            lines instead of wrapping mid-phrase around the separator. */}
        <p className="hero-tagline">
          <span className="hero-tagline-part">
            Founder @{" "}
            <a
              className="hero-tagline-link"
              href="https://revanite.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Revanite
            </a>
          </span>
          <span className="hero-tagline-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero-tagline-part">
            Open Source Security &amp; Compliance
          </span>
        </p>
        <nav className="site-nav" aria-label="Primary">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} className="nav-link">
              {label}
            </NavLink>
          ))}
        </nav>
      </section>
    </header>
  );
};
