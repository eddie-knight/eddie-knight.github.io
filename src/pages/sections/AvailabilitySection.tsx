import React from "react";
import { TextSection } from "../../components/TextSection";
import { ListSection } from "../../components/ListSection";
import { CTACard } from "../../components/CTACard";
import { AffiliationsSection } from "../../components/AffiliationsSection";

export const AvailabilitySection: React.FC = () => {
  return (
    <>
      {/* Availability Notice Section */}
      <TextSection
        paragraphs={[
          "Throughout 2024 and 2025, I have been fortunate to launch multiple initiatives and I've supported multiple organizations through ad-hoc advising and technical mentorship. To ensure I can provide the highest level of attention to the projects I lead and the organizations I support, I am narrowing my availability for 2026.",
          "My bandwidth is currently dedicated to the governance boards, steering committees, and maintainer roles listed above. Outside of these institutional commitments, my availability is prioritized as follows:"
        ]}
        textShadow={true}
        maxWidth="1000px"
      />
      <ListSection
        items={[
          <><strong>Open Source Maintainers:</strong> The health of our ecosystem is my top priority. If you're a maintainer looking to collaborate or discuss topics like community structure or security standards, just reach out to me on Slack.</>,
          <><strong>Organizations & Leadership:</strong> I'm accepting a limited number of Paid Strategic Intensives. These are high-leverage engagements designed to solve specific friction points in GRC or Open Source Strategy. Check out my philosophy and advisory topics below, then use the corresponding links to start the conversation.</>,
        ]}
        textShadow={true}
        maxWidth="1000px"
      />
      {/* OSS Strategy CTA Section */}
      <CTACard
        id="oss-cta"
        title="Are you engaging strategically with open source projects?"
        paragraphs={[
          "Open source is no longer just \"free software\"—it is the foundation of your stack. If your team is merely consuming OSS without a strategy, you're at the mercy of external roadmaps and security vulnerabilities. And if you're contributing externally to projects, or paying for memberships to foundations, you may be missing out on critical benefits and opportunities.",
          "I help organizations move from passive usage to strategic contribution, ensuring your engineering team has a seat at the table of the projects you depend on. Let's turn your open-source engagement into a competitive advantage and a talent magnet."
        ]}
        buttonText="Apply for an OSS Strategy Session"
        buttonDisabled={true}
      />
    </>
  );
};

