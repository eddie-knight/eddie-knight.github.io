import React from "react";

interface ListSectionProps {
  items: (string | React.ReactNode)[];
  centered?: boolean;
  textShadow?: boolean;
  maxWidth?: string;
}

export const ListSection: React.FC<ListSectionProps> = ({
  items,
  centered = false,
  textShadow = false,
  maxWidth
}) => {
  const sectionStyle: React.CSSProperties = {
    marginBottom: "var(--gf-space-xl)"
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: "1.5em",
    margin: 0,
    marginBottom: "var(--gf-space-md)",
    ...(maxWidth && {
      maxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    })
  };

  const itemStyle: React.CSSProperties = {
    color: "var(--gf-color-text)",
    lineHeight: 1.8,
    fontSize: "1.25rem",
    marginBottom: "var(--gf-space-md)",
    ...(centered && { textAlign: "center" }),
    ...(textShadow && { textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" })
  };

  return (
    <section className="text-section" style={sectionStyle}>
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={itemStyle}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

