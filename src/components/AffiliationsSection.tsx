import React from "react";
import { InvolvementCard } from "./InvolvementCard";
import { useAutoScroll } from "../hooks/useAutoScroll";
import finosLogo from "../public/logos/FINOS_Icon_Wordmark_Name_horz_White.svg";
import finosCccLogo from "../public/logos/2023_FinosCCC_Horizontal_WHT.svg";
import cncfLogo from "../public/logos/cncf-white.svg";
import openssfLogo from "../public/logos/Open-SSF-Logo-horizontal-colorwhite.svg";
import baselineLogo from "../public/logos/baseline_logo.png";
import gemaraLogo from "../public/logos/gemara-logo.png";
import privateerLogo from "../public/logos/privateer-icon.png";
import revaniteLogo from "../public/logos/revanite-logo.png";

interface InvolvementCardData {
  title: string;
  organization: string;
  url: string;
  logo?: string;
}

const affiliations: InvolvementCardData[] = [
  {
    title: "Revanite, Founder",
    organization: "Revanite",
    url: "https://revanite.io/",
    logo: revaniteLogo
  },
  {
    title: "Technical Oversight Committee, Member",
    organization: "FINOS",
    url: "https://www.finos.org/technical-oversight-committee",
    logo: finosLogo
  },
  {
    title: "OSPS Baseline, Creator & Maintainer",
    organization: "OpenSSF",
    url: "https://baseline.openssf.org/",
    logo: baselineLogo
  },
  {
    title: "Gemara, Creator & Maintainer",
    organization: "OpenSSF",
    url: "https://gemara.openssf.org/",
    logo: gemaraLogo
  },
  {
    title: "Privateer, Creator & Maintainer",
    organization: "OpenSSF",
    url: "http://privateerproj.com/",
    logo: privateerLogo
  },
  {
    title: "Security Slam, Creator & Organizer",
    organization: "CNCF",
    url: "https://securityslam.com/",
    logo: cncfLogo
  },
  {
    title: "Common Architecture Language Model, Maintainer",
    organization: "FINOS",
    url: "https://calm.finos.org/",
    logo: finosLogo
  },
  {
    title: "Common Cloud Controls, Maintainer",
    organization: "FINOS",
    url: "https://www.finos.org/projects/finos-common-cloud-controls",
    logo: finosCccLogo
  },
  {
    title: "Security Insights, Maintainer",
    organization: "OpenSSF",
    url: "https://github.com/ossf/security-insights/tree/main/spec",
    logo: openssfLogo
  }
];

/**
 * Deliberately unlabeled. Each card already names its project and role, so a
 * heading over the rail would only restate what the cards say.
 */
export const AffiliationsSection: React.FC = () => {
  const { containerRef, pauseHandlers } = useAutoScroll<HTMLDivElement>();

  return (
    <section id="affiliations" className="rail-section">
      <div
        ref={containerRef}
        className="rail edge-fade"
        {...pauseHandlers}
        role="region"
        aria-label="Current roles and projects"
      >
        <div className="rail-track">
          {/* The list is repeated so the loop reset is invisible. Only the
              first pass is exposed to assistive tech and keyboard users. */}
          {[0, 1, 2].map((setIndex) =>
            affiliations.map((involvement, index) => (
              <InvolvementCard
                key={`${setIndex}-${index}`}
                title={involvement.title}
                organization={involvement.organization}
                url={involvement.url}
                logo={involvement.logo}
                decorative={setIndex > 0}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
