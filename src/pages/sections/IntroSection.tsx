import React from "react";
import { TextSection } from "../../components/TextSection";

/**
 * The one line that says what Eddie does, rather than what he is. The roles
 * themselves are already stated twice above — once in the hero tagline and
 * once by the rail — so this deliberately does not restate them.
 */
export const IntroSection: React.FC = () => {
  return (
    <TextSection
      lede
      centered
      textShadow
      maxWidth="820px"
      paragraphs={[
        "I build the standards and tooling that let regulated organizations prove their software is secure, without slowing delivery down."
      ]}
    />
  );
};
