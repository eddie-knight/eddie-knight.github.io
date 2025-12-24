import React from "react";
import { TextSection } from "../components/TextSection";
import { AffiliationsSection } from "../components/AffiliationsSection";

export const BioPage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Opening Narrative Section */}
      <TextSection
        paragraphs={[
          "My work is centered on creating a unified governance stack that enables continuous compliance monitoring and \"compliance-as-code,\" ensuring that demand for software velocity is balanced with the requirements of regulatory resilience. By holding leadership positions such as Chair of the Technical Oversight Committee for FINOS and Technical Lead for the CNCF TAG Security & Compliance, I maintain real-time visibility into the latest trends and critical pain points facing both the open-source ecosystem and its largest global consumers."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      <AffiliationsSection />

      {/* Key Work Section */}
      <TextSection
        title="Standards & Tools"
        paragraphs={[
          <>A cornerstone of my recent work is the <strong>Open Source Project Security (OSPS) Baseline</strong>, which I authored to establish a tiered maturity model for software supply chain security. This baseline has been adopted as the security standard for the Linux Foundation and the primary leading citation for the German government's BSI-TR-03185-2. To move standards such as these from policy to practice, I developed <strong>Privateer</strong>, a validation engine and test harness. This tool is now utilized to evaluate Linux Foundation projects, providing automated, machine-readable verification of compliance with established control objectives.</>
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      {/* Community & Policy Section */}
      <TextSection
        title="Community & Global Policy"
        paragraphs={[
          <>In addition to my architectural work, I am deeply involved in community-driven security initiatives and global policy. Since 2022, I have organized the <strong>CNCF Security Slam</strong>, an event dedicated to improving the security posture of cloud-native projects through actionable transparency. At KubeCon Europe in London, I delivered a keynote on the EU's Cyber Resilience Act (CRA) for a major international audience.</>
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      {/* Career Evolution Section */}
      <TextSection
        title="Strategic Impact"
        paragraphs={[
          "My career has evolved from acting as an individual contributor to serving as a strategic advisor for the world's largest cloud providers and most highly regulated organizations. By functioning like a super-node across the FINOS, CNCF, and OpenSSF, I help ensure that global security standards are not just understood, but are technically implementable and automated."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      {/* Philosophy & Future Section */}
      <TextSection
        title="Vision & Innovation"
        paragraphs={[
          <>Ultimately, I view GRC not as a bureaucratic bottleneck, but as a primary catalyst for organizational velocity when executed through a unified governance stack. This is why I've built <strong>Gemara</strong>, control catalogs in FINOS and Gemara, and Privateer.</>,
          "And it's why I'm working with some big design partners to cook up a new product that you'll hear about very soon."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />
    </div>
  );
};
