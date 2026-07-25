import React from "react";

export interface SectionHeadingProps {
  /** Short mono label above the title. Use it to carry a fact, not a slogan. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: string;
  /** Renders the title as an h1. Only for the leading heading of a page. */
  as?: "h1" | "h2";
}

/**
 * The single heading device used across every section, so section titles,
 * card titles and page titles stay on one scale.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  maxWidth,
  as = "h2"
}) => {
  const Title = as;

  return (
    <div
      className={centered ? "section-heading centered" : "section-heading"}
      style={
        maxWidth ? { maxWidth, marginLeft: "auto", marginRight: "auto" } : undefined
      }
    >
      {eyebrow && (
        <p className="section-eyebrow">
          <span className="section-eyebrow-rule" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Title style={{ marginBottom: subtitle ? "0.5rem" : "var(--gf-space-md)" }}>
        {title}
      </Title>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
