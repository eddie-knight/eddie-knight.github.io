import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CTACard } from "../components/CTACard";
import { PillarCard } from "../components/PillarCard";
import { TextSection } from "../components/TextSection";
import finosLogo from "../public/images/FINOS_Icon_Wordmark_Name_horz_White.svg";
import finosCccLogo from "../public/images/2023_FinosCCC_Horizontal_WHT.svg";
import cncfLogo from "../public/images/cncf-white.svg";
import openssfLogo from "../public/images/Open-SSF-Logo-horizontal-colorwhite.svg";
import orbitLogo from "../public/images/orbit_logo.svg";
import baselineLogo from "../public/images/baseline_logo.png";
import gemaraLogo from "../public/images/gemara-logo.png";
import privateerLogo from "../public/images/privateer-icon.png";
import sonatypeLogo from "../public/images/Sonatype_logo_white.svg";

interface InvolvementCard {
  title: string;
  organization: string;
  url: string;
  logo?: string;
}

const affiliations: InvolvementCard[] = [
  {
    title: "Office of the CTO, OSPO Lead",
    organization: "Sonatype",
    url: "https://sonatype.com/",
    logo: sonatypeLogo
  },
  {
    title: "Governing Board, Member",
    organization: "FINOS",
    url: "https://www.finos.org/governing-board",
    logo: finosLogo
  },
  {
    title: "Technical Oversight Committee, Chair",
    organization: "FINOS",
    url: "https://www.finos.org/technical-oversight-committee",
    logo: finosLogo
  },
  {
    title: "Common Cloud Controls, Steering Committee",
    organization: "FINOS",
    url: "https://www.finos.org/projects/finos-common-cloud-controls",
    logo: finosCccLogo
  },
  {
    title: "TAG Security & Compliance, Technical Lead",
    organization: "CNCF",
    url: "https://github.com/cncf/toc/tree/main/tags/tag-security-and-compliance",
    logo: cncfLogo
  },
  {
    title: "ORBIT, Working Group Lead",
    organization: "OpenSSF",
    url: "https://github.com/ossf/wg-orbit",
    logo: orbitLogo
  },
  {
    title: "OSPS Baseline, Author & Maintainer",
    organization: "OpenSSF",
    url: "https://baseline.openssf.org/",
    logo: baselineLogo
  },
  {
    title: "Gemara, Author & Maintainer",
    organization: "OpenSSF",
    url: "https://gemara.openssf.org/",
    logo: gemaraLogo
  },
  {
    title: "Security Insights, Lead Maintainer",
    organization: "OpenSSF",
    url: "https://github.com/ossf/security-insights/tree/main/spec",
    logo: openssfLogo
  },
  {
    title: "Privateer Project, Lead Maintainer",
    organization: "Privateer",
    url: "http://privateerproj.com/",
    logo: privateerLogo
  },
];

interface LogoComponentProps {
  logo?: string;
  organization: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ logo, organization }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      style={{
        minWidth: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {logo && !imageError ? (
        <img
          src={logo}
          alt={`${organization} logo`}
          style={{
            maxHeight: "80px",
            maxWidth: "240px",
            objectFit: "contain"
          }}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          style={{
            width: "60px",
            height: "60px",
            background: "var(--gf-color-accent-soft)",
            borderRadius: "var(--gf-radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--gf-color-accent)",
            fontWeight: 600,
            fontSize: "1.5rem"
          }}
        >
          {organization.charAt(0)}
        </div>
      )}
    </div>
  );
};

export const HomePage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const isUserInteractingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const lastScrollPositionRef = useRef<number>(0);
  const scrollSpeed = 0.5; // pixels per frame
  const maxScrollSpeed = scrollSpeed * 3; // 3x the normal speed

  // Triple affiliations for seamless infinite scroll (3x length)
  const duplicatedaffiliations = [...affiliations, ...affiliations, ...affiliations];

  // Sync ref with state
  useEffect(() => {
    isUserInteractingRef.current = isUserInteracting;
  }, [isUserInteracting]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!container || isUserInteractingRef.current) {
        animationFrameRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      // With 3 sets, one set is 1/3 of the total width
      const oneSetWidth = scrollWidth / 3;
      const currentScroll = container.scrollLeft;

      // Calculate new scroll position
      let newScroll = currentScroll + scrollSpeed;

      // Reset when we've scrolled past one full set (when first set leaves viewport)
      // This creates seamless infinite scroll without visual jump
      if (newScroll >= oneSetWidth) {
        newScroll = newScroll - oneSetWidth;
      }

      container.scrollLeft = newScroll;

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollSpeed]);

  // Handle user interaction
  const handleUserInteraction = () => {
    setIsUserInteracting(true);
    
    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume auto-scroll after 2-3 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2500);
  };


  // Initialize last scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      lastScrollPositionRef.current = container.scrollLeft;
    }
  }, []);

  // Add native wheel listener with passive: false to properly prevent default
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheelNative = (e: WheelEvent) => {
      // Only handle horizontal scrolling
      const deltaX = e.deltaX || (e.shiftKey ? e.deltaY : 0);
      if (Math.abs(deltaX) < 0.1) return;

      handleUserInteraction();

      // Prevent ALL default scrolling
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      // Cap the scroll delta - normal speed is 0.5px/frame, 3x = 1.5px/frame
      // At 60fps that's 90px/sec. Cap wheel events to 15px per event (very restrictive)
      const maxDeltaPerEvent = 15;
      const cappedDelta = Math.sign(deltaX) * Math.min(Math.abs(deltaX), maxDeltaPerEvent);

      // Manually scroll with capped speed
      const scrollWidth = container.scrollWidth;
      // With 3 sets, one set is 1/3 of the total width
      const oneSetWidth = scrollWidth / 3;

      let newScroll = container.scrollLeft + cappedDelta;

      // Reset when we've scrolled past one full set (when first set leaves viewport)
      if (newScroll >= oneSetWidth) {
        newScroll = newScroll - oneSetWidth;
      } else if (newScroll < 0) {
        newScroll = 0;
      }

      container.scrollLeft = newScroll;
      lastScrollPositionRef.current = newScroll;
    };

    // Use native listener with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheelNative, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheelNative);
    };
  }, [handleUserInteraction]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%"
      }}
    >
      {/* affiliations Section */}
      <section
        id="affiliations"
        style={{
          marginBottom: "var(--gf-space-xl)",
          marginTop: "var(--gf-space-xl)"
        }}
      >
        <div
          ref={scrollContainerRef}
          onMouseDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onTouchMove={handleUserInteraction}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "var(--gf-space-lg)",
            paddingTop: "var(--gf-space-lg)",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            paddingLeft: "var(--gf-space-xl)",
            paddingRight: "var(--gf-space-xl)"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "var(--gf-space-lg)",
              width: "max-content"
            }}
          >
            {duplicatedaffiliations.map((involvement, index) => (
              <a
                key={index}
                href={involvement.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "var(--gf-space-md)",
                  backgroundColor: "var(--gf-color-surface)",
                  borderRadius: "var(--gf-radius-xl)",
                  boxShadow: "var(--gf-shadow-surface)",
                  backdropFilter: "var(--gf-glass-blur)",
                  WebkitBackdropFilter: "var(--gf-glass-blur)",
                  border: "1px solid var(--gf-color-border-strong)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--gf-shadow-surface-strong)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--gf-shadow-surface)";
                }}
              >
                {/* Logo */}
                <LogoComponent
                  logo={involvement.logo}
                  organization={involvement.organization}
                />

                {/* Project Name (mid-sized text) */}
                {(() => {
                  const parts = involvement.title.split(", ");
                  const projectName = parts[0];
                  const role = parts.slice(1).join(", ");
                  
                  return (
                    <>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          marginBottom: role ? "0.25rem" : "var(--gf-space-md)",
                          color: "var(--gf-color-text)",
                          lineHeight: 1.3
                        }}
                      >
                        {projectName}
                      </h3>
                      {/* Role (small text) */}
                      {role && (
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--gf-color-text-subtle)",
                            marginBottom: "var(--gf-space-md)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em"
                          }}
                        >
                          {role}
                        </div>
                      )}
                    </>
                  );
                })()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Notice Section */}
      <TextSection
        paragraphs={[
          "Throughout 2024 and 2025, I have been fortunate to support a wide range of teams through ad-hoc advising and technical mentorship. However, to ensure I can provide the highest level of depth and attention to the projects I lead and the organizations I support, I am narrowing my availability for 2026.",
          "My bandwidth is currently dedicated to the governance boards, steering committees, and maintainer roles listed above. Outside of these institutional commitments, my availability is prioritized as follows:",
          <><strong>For Open Source Maintainers:</strong> I remain committed to the health of the ecosystem. If you are a maintainer seeking guidance on community structure or security standards, please reach out via our established Slack channels.</>,
          <><strong>For Organizations & Leadership:</strong> I am accepting a limited number of Paid Strategic Intensives. These are high-leverage engagements designed to solve specific friction points in GRC or Open Source Strategy.</>,
          "Check out my philosophy and advisory topics below, then use the corresponding links to start the conversation."
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

    </div>
  );
};
