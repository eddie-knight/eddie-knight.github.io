import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();

  // Hide header on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <header
      style={{
        padding: "var(--gf-space-md) var(--gf-space-lg)"
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <nav
          style={{
            display: "flex",
            gap: "var(--gf-space-md)",
            alignItems: "center"
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
      </nav>
    </header>
  );
};

