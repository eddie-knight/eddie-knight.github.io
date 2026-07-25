import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { CTACard } from "../../components/CTACard";

/**
 * The two doors out of the site. The availability copy above points here with
 * "philosophy and advisory topics below", so both tracks sit together rather
 * than being scattered between other sections.
 */
export const AdvisorySection: React.FC = () => {
  return (
    <section id="advisory">
      <SectionHeading
        eyebrow="Two engagement tracks"
        title="Advisory Topics"
        centered
        maxWidth="900px"
      />
      <div className="card-grid card-grid-wide">
        <CTACard
          id="oss-cta"
          title="Are you engaging strategically with open source projects?"
          paragraphs={[
            "Open source is no longer just \"free software\"—it is the foundation of your stack. If your team is merely consuming OSS without a strategy, you're at the mercy of external roadmaps and security vulnerabilities. And if you're contributing externally to projects, or paying for memberships to foundations, you may be missing out on critical benefits and opportunities.",
            "I help organizations move from passive usage to strategic contribution, ensuring your engineering team has a seat at the table of the projects you depend on. Let's turn your open-source engagement into a competitive advantage and a talent magnet."
          ]}
          buttonText="Apply for an OSS Strategy Session"
          buttonDisabled={false}
        />
        <CTACard
          id="grc-cta"
          title="Is your GRC a Bottleneck or a Bridge?"
          paragraphs={[
            "Most organizations treat compliance as a tax that must be paid instead of an engineering discipline. When security and policy are manual checklists, they stall innovation.",
            "But when they're expressed as standardized Policy-as-Code, they become accelerators on the path to production. If your cloud controls are opaque, your audit trails are fragmented, or your security posture is slowing your release cycles, we should talk about building governance that scales."
          ]}
          buttonText="Apply for a GRC & Operations Strategic Intensive"
          buttonDisabled={false}
        />
      </div>
    </section>
  );
};
