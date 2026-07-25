import React from "react";
import { SectionHeading } from "./SectionHeading";

interface TextSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  paragraphs: (string | React.ReactNode)[];
  centered?: boolean;
  textShadow?: boolean;
  maxWidth?: string;
  lastParagraphMargin?: string;
  /** Larger opening type, for the leading paragraph of a page. */
  lede?: boolean;
}

export const TextSection: React.FC<TextSectionProps> = ({
  eyebrow,
  title,
  subtitle,
  paragraphs,
  centered = false,
  textShadow = false,
  maxWidth,
  lastParagraphMargin = "0",
  lede = false
}) => {
  const paragraphStyle: React.CSSProperties = {
    color: "var(--gf-color-text)",
    lineHeight: lede ? 1.6 : 1.8,
    fontSize: lede ? "var(--gf-text-lede)" : "var(--gf-text-body)",
    marginBottom: "var(--gf-space-md)",
    ...(centered && { textAlign: "center" }),
    ...(textShadow && { textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }),
    ...(maxWidth && {
      maxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    })
  };

  return (
    <section className="text-section">
      {title && (
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          centered={centered}
          maxWidth={maxWidth}
        />
      )}
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          style={{
            ...paragraphStyle,
            ...(index === paragraphs.length - 1 && {
              marginBottom: lastParagraphMargin
            })
          }}
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};
