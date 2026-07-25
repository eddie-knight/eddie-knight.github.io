import React from "react";
import { IntroSection } from "./sections/IntroSection";
import { AvailabilitySection } from "./sections/AvailabilitySection";
import { ThreePillarsSection } from "./sections/ThreePillarsSection";
import { AdvisorySection } from "./sections/AdvisorySection";
import { AffiliationsSection } from "../components/AffiliationsSection";

/**
 * The roles rail runs first so the credentials arrive before any claim about
 * them; the intro underneath is the first thing that speaks in Eddie's voice.
 * Then: what he has time for -> how he thinks -> how to hire him. The
 * availability copy refers to the roles "listed above" and the topics "below",
 * so the rail and the advisory tracks bracket it.
 */
export const HomePage: React.FC = () => {
  return (
    <div className="page">
      <IntroSection />
      <AffiliationsSection />
      <div className="page-section">
        <AvailabilitySection />
      </div>
      <div className="page-section">
        <ThreePillarsSection />
      </div>
      <div className="page-section">
        <AdvisorySection />
      </div>
    </div>
  );
};
