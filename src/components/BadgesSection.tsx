import React from "react";
import { SectionHeading } from "./SectionHeading";
import { useAutoScroll } from "../hooks/useAutoScroll";

// Dynamically import all badge images from public/badges
const badgeModules = import.meta.glob(
  "../public/badges/**/*.{png,jpg,jpeg,svg,webp,gif}",
  { eager: true }
);

const badges: string[] = Object.values(badgeModules).map(
  (module) => (module as { default: string }).default
);

interface BadgesSectionProps {
  title?: string;
  eyebrow?: string;
  subtitle?: string;
}

export const BadgesSection: React.FC<BadgesSectionProps> = ({
  title,
  eyebrow,
  subtitle
}) => {
  const { containerRef, pauseHandlers } = useAutoScroll<HTMLDivElement>();

  if (badges.length === 0) {
    return null;
  }

  return (
    <section id="badges" className="rail-section">
      {title && (
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          maxWidth="var(--gf-measure)"
        />
      )}
      <div
        ref={containerRef}
        className="rail rail-badges edge-fade"
        {...pauseHandlers}
      >
        <div className="rail-track rail-track-centered">
          {[0, 1, 2].map((setIndex) =>
            badges.map((badge, index) => (
              <img
                key={`${setIndex}-${index}`}
                src={badge}
                alt=""
                loading="lazy"
                decoding="async"
                className="badge-image"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
