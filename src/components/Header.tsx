import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header
      className="site-header"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            marginBottom: 0,
            color: "var(--gf-color-text)",
            lineHeight: 1.1,
            maxWidth: "900px"
          }}
        >
          Eddie Knight
        </h1>
        <p
          style={{
            fontSize: "2rem",
            color: "var(--gf-color-text-subtle)",
            marginTop: "0.5rem",
            marginBottom: "var(--gf-space-lg)",
            lineHeight: 1.6
          }}
        >
          Strategic Advisory
        </p>
        <nav
          style={{
            display: "flex",
            gap: "var(--gf-space-md)",
            alignItems: "center",
            marginTop: "var(--gf-space-md)"
          }}
        >
          <Link
            to="/"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/bio"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/bio" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/bio") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/bio") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Bio
          </Link>
          <Link
            to="/apply"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/apply" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/apply") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/apply") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Apply
          </Link>
        </nav>
      </section>
    </header>
  );
};

