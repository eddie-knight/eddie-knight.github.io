import React from "react";

export const Header: React.FC = () => {
  return (
    <header
      style={{
        padding: "var(--gf-space-lg)",
        borderBottom: "1px solid var(--gf-color-border-strong)",
        backgroundColor: "var(--gf-color-surface)",
        backdropFilter: "var(--gf-glass-blur)",
        WebkitBackdropFilter: "var(--gf-glass-blur)"
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--gf-color-accent)"
          }}
        >
          Eddie Knight
        </div>
        <nav
          style={{
            display: "flex",
            gap: "var(--gf-space-md)",
            alignItems: "center"
          }}
        >
          <a
            href="#involvements"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Involvements
          </a>
          <a
            href="#about"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Contact
          </a>
        </nav>
      </nav>
    </header>
  );
};

