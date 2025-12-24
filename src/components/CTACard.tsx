import React from "react";
import { Link } from "react-router-dom";

interface CTACardProps {
  id?: string;
  title: string;
  paragraphs: (string | React.ReactNode)[];
  buttonText: string;
  buttonDisabled?: boolean;
}

export const CTACard: React.FC<CTACardProps> = ({
  id,
  title,
  paragraphs,
  buttonText,
  buttonDisabled = true
}) => {
  return (
    <section
      id={id}
      style={{
        marginBottom: "var(--gf-space-xl)",
        padding: "var(--gf-space-xl)",
        backgroundColor: "var(--gf-color-surface)",
        borderRadius: "var(--gf-radius-xl)",
        boxShadow: "var(--gf-shadow-surface)",
        backdropFilter: "var(--gf-glass-blur)",
        WebkitBackdropFilter: "var(--gf-glass-blur)",
        border: "1px solid var(--gf-color-border-strong)"
      }}
    >
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          style={{
            color: "var(--gf-color-text)",
            lineHeight: 1.8,
            fontSize: "1.25rem",
            marginBottom: "var(--gf-space-lg)"
          }}
        >
          {paragraph}
        </p>
      ))}
      <div style={{ textAlign: "center" }}>
        {buttonDisabled ? (
          <div
            style={{
              display: "inline-block",
              padding: "var(--gf-space-lg) var(--gf-space-xl)",
              backgroundColor: "var(--gf-color-accent)",
              color: "var(--gf-color-button-text)",
              borderRadius: "var(--gf-radius-lg)",
              fontSize: "1.25rem",
              fontWeight: 600,
              opacity: 0.6,
              cursor: "not-allowed",
              pointerEvents: "none",
              boxShadow: "var(--gf-shadow-surface)"
            }}
          >
            {buttonText}
          </div>
        ) : (
          <Link
            to="/apply"
            style={{
              display: "inline-block",
              padding: "var(--gf-space-lg) var(--gf-space-xl)",
              backgroundColor: "var(--gf-color-accent)",
              color: "var(--gf-color-button-text)",
              borderRadius: "var(--gf-radius-lg)",
              fontSize: "1.25rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "var(--gf-shadow-surface)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--gf-shadow-surface-strong)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--gf-shadow-surface)";
            }}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

