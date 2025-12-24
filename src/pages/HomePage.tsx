import React from "react";
import { AvailabilitySection } from "./sections/AvailabilitySection";
import { ThreePillarsSection } from "./sections/ThreePillarsSection";
import { AffiliationsSection } from "./sections/AffiliationsSection";


export const HomePage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%"
      }}
    >
      <div style={{ marginTop: "calc(var(--gf-space-xl) * 3)" }}>
      <AffiliationsSection />
      </div>
      <div style={{ marginTop: "calc(var(--gf-space-xl) * 3)" }}>
        <AvailabilitySection />
      </div>
      <div style={{ marginTop: "calc(var(--gf-space-xl) * 3)" }}>
        <ThreePillarsSection />
      </div>
    </div>
  );
};
