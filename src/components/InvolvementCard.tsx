import React from "react";
import { LogoComponent } from "./LogoComponent";

interface InvolvementCardProps {
  title: string;
  organization: string;
  url: string;
  logo?: string;
}

export const InvolvementCard: React.FC<InvolvementCardProps> = ({
  title,
  organization,
  url,
  logo
}) => {
  const parts = title.split(", ");
  const projectName = parts[0];
  const role = parts.slice(1).join(", ");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "var(--gf-space-md)",
        backgroundColor: "var(--gf-color-surface)",
        borderRadius: "var(--gf-radius-xl)",
        boxShadow: "var(--gf-shadow-surface)",
        backdropFilter: "var(--gf-glass-blur)",
        WebkitBackdropFilter: "var(--gf-glass-blur)",
        border: "1px solid var(--gf-color-border-strong)",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--gf-shadow-surface-strong)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--gf-shadow-surface)";
      }}
    >
      {/* Logo */}
      <LogoComponent logo={logo} organization={organization} />

      {/* Project Name (mid-sized text) */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: role ? "0.25rem" : "var(--gf-space-md)",
          color: "var(--gf-color-text)",
          lineHeight: 1.3
        }}
      >
        {projectName}
      </h3>
      {/* Role (small text) */}
      {role && (
        <div
          style={{
            fontSize: "0.75rem",
            color: "var(--gf-color-text-subtle)",
            marginBottom: "var(--gf-space-md)",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          {role}
        </div>
      )}
    </a>
  );
};

