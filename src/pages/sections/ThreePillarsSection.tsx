import React from "react";
import { TextSection } from "../../components/TextSection";
import { PillarCard } from "../../components/PillarCard";

export const ThreePillarsSection: React.FC = () => {
  return (
    <section id="three-pillars">
      <TextSection
        eyebrow="How I work"
        title="Three Pillars of Engineering"
        subtitle="Engage strategically, or fail haphazardly"
        paragraphs={[
          "Regardless of your organization's size, sustainable technical excellence requires balancing what we build (Technology), how we operate (Community), and the guardrails that ensure consistency (Standards). Aligning these three pillars reduces cognitive load while increasing velocity and security."
        ]}
        centered={true}
        textShadow={true}
        maxWidth="900px"
        lastParagraphMargin="var(--gf-space-xl)"
      />
      <div className="card-grid">
        <PillarCard
          title="Technology"
          description='Technology is the basis of consistent and scalable value delivery. This pillar embraces a technology-first approach—infrastructure, configuration, and testing—maximizing automation to eliminate manual bottlenecks and errors. When built with modularity and automated rigor, systems become self-documenting, reproducible, and agile.'
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
  );
};
