import React from "react";
import { Link } from "react-router-dom";
import { TextSection } from "../components/TextSection";
import { SectionHeading } from "../components/SectionHeading";
import { AffiliationsSection } from "../components/AffiliationsSection";
import { BadgesSection } from "../components/BadgesSection";

export const BioPage: React.FC = () => {
  return (
    <div className="page">
      {/* Opening Narrative Section */}
      <TextSection
        eyebrow="Bio"
        title="Approach"
        paragraphs={[
          "My work is centered on creating a unified governance stack that enables continuous compliance monitoring and \"compliance-as-code,\" ensuring that demand for software velocity is balanced with the requirements of regulatory resilience. As the founder of Revanite, a member of the FINOS Technical Oversight Committee, and a maintainer of security and architecture standards across the OpenSSF, FINOS, and CNCF, I maintain real-time visibility into the latest trends and critical pain points facing both the open-source ecosystem and its largest global consumers."
        ]}
        textShadow={true}
        maxWidth="var(--gf-measure)"
      />

      {/* Key Work Section */}
      <TextSection
        title="Standards & Tools"
        paragraphs={[
          <>A cornerstone of my recent work is the <strong>Open Source Project Security (OSPS) Baseline</strong>, which I authored alongside several other industry leaders to establish a tiered maturity model for software supply chain security. This baseline has been adopted as the security standard for the Linux Foundation and the primary leading citation for the German government's BSI-TR-03185-2. To move standards such as these from policy to practice, I developed <strong>Privateer</strong>, a validation engine and test harness. This tool is now utilized to evaluate Linux Foundation projects, providing automated, machine-readable verification of compliance with established control objectives.</>
        ]}
        textShadow={true}
        maxWidth="var(--gf-measure)"
      />

      {/* Community & Policy Section */}
      <TextSection
        title="Community & Global Policy"
        paragraphs={[
          <>In addition to my architectural work, I am deeply involved in community-driven security initiatives and global policy. Since 2022, I have organized the <strong>CNCF Security Slam</strong>, an event dedicated to improving the security posture of cloud-native projects through actionable transparency. At KubeCon Europe in London, I delivered a keynote on the EU's Cyber Resilience Act (CRA) for a major international audience.</>
        ]}
        textShadow={true}
        maxWidth="var(--gf-measure)"
      />

      {/* Sits directly under the keynote and community paragraph it illustrates. */}
      <div className="page-section">
        <BadgesSection title="Speaking & Recognition" />
      </div>

      {/* Career Evolution Section */}
      <div className="page-section">
        <TextSection
          title="Strategic Impact"
          paragraphs={[
            "My career has evolved from acting as an individual contributor to serving as a strategic advisor for the world's largest cloud providers and most highly regulated organizations. By corrdinating efforts across the FINOS, CNCF, and OpenSSF, I help ensure that interoperable security standards are not just available, but are technically implemented and automated."
          ]}
          textShadow={true}
          maxWidth="var(--gf-measure)"
        />
      </div>

      <div className="page-section">
        <AffiliationsSection />
      </div>

      {/* Philosophy & Future Section */}
      <div className="page-section">
        <TextSection
          title="Vision & Innovation"
          paragraphs={[
            <>Ultimately, I view GRC not as a bureaucratic bottleneck, but as a primary catalyst for organizational velocity when executed through a unified governance stack. This is why I created <strong>Gemara</strong> and <strong>Privateer</strong>, and why I maintain control catalogs and architecture standards across FINOS and the OpenSSF.</>,
            <>And it's why I founded <a className="inline-link" href="https://revanite.io" target="_blank" rel="noopener noreferrer"><strong>Revanite</strong></a>, where we build open source tools for continuous compliance with the EU Cyber Resilience Act and other software security regulations.</>
          ]}
          textShadow={true}
          maxWidth="var(--gf-measure)"
        />
      </div>

      {/* Without this the page dead-ends at the footer. */}
      <div className="page-section">
        <section className="cta-card cta-card-compact">
          <SectionHeading title="Where to go next" centered />
          <div className="button-row">
            <Link className="cta-button" to="/apply">
              Apply for a strategic intensive
            </Link>
            <a
              className="cta-button cta-button-secondary"
              href="https://revanite.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Revanite
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
