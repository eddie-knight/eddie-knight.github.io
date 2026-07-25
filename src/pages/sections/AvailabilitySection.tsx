import React from "react";
import { TextSection } from "../../components/TextSection";
import { ListSection } from "../../components/ListSection";

export const AvailabilitySection: React.FC = () => {
  return (
    <>
      <TextSection
        eyebrow="Currently"
        title="Availability for 2026"
        paragraphs={[
          "Throughout 2024 and 2025, I have been fortunate to launch multiple initiatives and I've supported multiple organizations through ad-hoc advising and technical mentorship. To ensure I can provide the highest level of attention to the projects I lead and the organizations I support, I am narrowing my availability for 2026.",
          "My bandwidth is currently dedicated to building Revanite, alongside the committee and maintainer roles listed above. Outside of these commitments, my availability is prioritized as follows:"
        ]}
        textShadow={true}
        maxWidth="var(--gf-measure)"
      />
      <ListSection
        items={[
          <><strong>Open Source Maintainers:</strong> The health of our ecosystem is my top priority. If you're a maintainer looking to collaborate or discuss topics like community structure or security standards, just reach out to me on Slack.</>,
          <><strong>Organizations & Leadership:</strong> I'm accepting a limited number of Paid Strategic Intensives. These are high-leverage engagements designed to solve specific friction points in GRC or Open Source Strategy. Check out my philosophy and advisory topics below, then use the corresponding links to start the conversation.</>,
        ]}
        textShadow={true}
        maxWidth="var(--gf-measure)"
      />
    </>
  );
};
