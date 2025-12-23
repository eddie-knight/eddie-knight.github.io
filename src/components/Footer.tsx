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
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--gf-space-md)",
            marginTop: "var(--gf-space-md)"
          }}
        >
          <a
            href="#"
            style={{
              color: "var(--gf-color-text-subtle)",
              textDecoration: "none"
            }}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{
              color: "var(--gf-color-text-subtle)",
              textDecoration: "none"
            }}
          >
            LinkedIn
          </a>
          <a
            href="#"
            style={{
              color: "var(--gf-color-text-subtle)",
              textDecoration: "none"
            }}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

