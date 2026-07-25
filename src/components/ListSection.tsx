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
  const listStyle: React.CSSProperties = {
    ...(maxWidth && {
      maxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    })
  };

  const itemStyle: React.CSSProperties = {
    ...(centered && { textAlign: "center" }),
    ...(textShadow && { textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" })
  };

  return (
    <section className="text-section">
      <ul className="priority-list" style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={itemStyle}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};
