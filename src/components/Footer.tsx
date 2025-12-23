import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: "var(--gf-space-lg)",
        borderTop: "1px solid var(--gf-color-border-strong)",
        backgroundColor: "var(--gf-color-surface)",
        backdropFilter: "var(--gf-glass-blur)",
        WebkitBackdropFilter: "var(--gf-glass-blur)",
        marginTop: "auto"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          color: "var(--gf-color-text-subtle)",
          fontSize: "0.875rem"
        }}
      >
        <p>© {new Date().getFullYear()} Eddie Knight. All rights reserved.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--gf-space-md)",
            marginTop: "var(--gf-space-md)"
          }}
        >
          <a
            href="https://github.com/eddie-knight"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--gf-color-text-subtle)",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gf-color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--gf-color-text-subtle)";
            }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/knight1776"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--gf-color-text-subtle)",
              textDecoration: "none",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gf-color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--gf-color-text-subtle)";
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

