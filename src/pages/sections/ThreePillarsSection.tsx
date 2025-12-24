import React from "react";
import { TextSection } from "../../components/TextSection";
import { PillarCard } from "../../components/PillarCard";
import { CTACard } from "../../components/CTACard";

export const ThreePillarsSection: React.FC = () => {
  return (
    <>
      {/* Three Pillars Section */}
      <section
        id="three-pillars"
        style={{
          marginBottom: "var(--gf-space-xl)",
          marginTop: "var(--gf-space-xl)",
        }}
      >
        <TextSection
          title="Three Pillars of Engineering"
          subtitle="Engage strategically, or fail haphazardly"
          paragraphs={[
            "Regardless of your organization's size, sustainable technical excellence requires balancing what we build (Code), how we operate (Community), and the guardrails that ensure consistency (Standards). Aligning these three pillars reduces cognitive load while increasing velocity and security."
          ]}
          centered={true}
          textShadow={true}
          maxWidth="900px"
          lastParagraphMargin="var(--gf-space-xl)"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--gf-space-lg)"
          }}
        >
          <PillarCard
            title="Code"
            description='Code is the basis of value delivery. This pillar embraces "Everything as Code"—infrastructure, configuration, and testing—maximizing automation to eliminate manual bottlenecks and errors. When built with modularity and automated rigor, systems become self-documenting, reproducible, and agile.'
          />
          <PillarCard
            title="Community"
            description="Software architecture mirrors human organization, according to Conway's Law. Understanding this, even for solo operations, is key to excellent decision-making. This pillar emphasizes healthy interpersonal structures that match the desired technical state. It fosters psychological safety, knowledge sharing, and collaboration to transform tribal knowledge into shared, accessible resources."
          />
          <PillarCard
            title="Standards"
            description="Standards provide pre-agreed constraints to enable contributor autonomy (including both humans and AI agents). This pillar encompasses security protocols, quality benchmarks, document schemas, and reusable workflows. Consistency across teams ensures interoperability and reduces technical debt."
          />
        </div>
      </section>

      {/* GRC CTA Section */}
      <CTACard
        id="grc-cta"
        title="Is your GRC a Bottleneck or a Bridge?"
        paragraphs={[
          "Most organizations treat compliance as a tax that must be paid instead of an engineering discipline. When security and policy are manual checklists, they stall innovation.",
          "But when they're expressed as standardized Policy-as-Code, they become accelerators on the path to production. If your cloud controls are opaque, your audit trails are fragmented, or your security posture is slowing your release cycles, we should talk about building governance that scales."
        ]}
        buttonText="Apply for a GRC & Operations Strategic Intensive"
        buttonDisabled={true}
      />
    </>
  );
};

