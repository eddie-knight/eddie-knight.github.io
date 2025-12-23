import React, { useState, useRef, useEffect } from "react";

interface InvolvementCard {
  title: string;
  organization: string;
  url: string;
  logo?: string;
}

const involvements: InvolvementCard[] = [
  {
    title: "Governing Board, Member",
    organization: "FINOS",
    url: "https://www.finos.org/governing-board",
    logo: "https://www.finos.org/wp-content/uploads/2021/02/finos-logo.svg"
  },
  {
    title: "Technical Oversight Committee, Chair",
    organization: "FINOS",
    url: "https://www.finos.org/technical-oversight-committee",
    logo: "https://www.finos.org/wp-content/uploads/2021/02/finos-logo.svg"
  },
  {
    title: "Common Cloud Controls, Steering Committee",
    organization: "FINOS",
    url: "https://www.finos.org/projects/finos-common-cloud-controls",
    logo: "https://www.finos.org/wp-content/uploads/2021/02/finos-logo.svg"
  },
  {
    title: "TAG Security & Compliance, Technical Lead",
    organization: "CNCF",
    url: "https://github.com/cncf/toc/tree/main/tags/tag-security-and-compliance",
    logo: "https://www.cncf.io/wp-content/uploads/2022/07/cncf-logo.svg"
  },
  {
    title: "ORBIT, Working Group Lead",
    organization: "OpenSSF",
    url: "https://github.com/ossf/wg-orbit",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg"
  },
  {
    title: "OSPS Baseline, Author & Maintainer",
    organization: "OpenSSF",
    url: "https://baseline.openssf.org/",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg"
  },
  {
    title: "Gemara, Author & Maintainer",
    organization: "OpenSSF",
    url: "https://gemara.openssf.org/",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg"
  },
  {
    title: "Security Insights Specification, Lead Maintainer",
    organization: "OpenSSF",
    url: "https://github.com/ossf/security-insights/tree/main/spec",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg"
  },
  {
    title: "Privateer Project, Lead Maintainer",
    organization: "Privateer",
    url: "http://privateerproj.com/",
    logo: undefined // Placeholder
  },
  {
    title: "Open Source Program Office, Lead",
    organization: "Sonatype",
    url: "https://sonatype.com/",
    logo: "https://www.sonatype.com/hubfs/2021%20Website%20Redesign%20Assets/Brand/Sonatype-Logo-White.svg"
  }
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
        width: "80px",
        height: "80px",
        marginBottom: "var(--gf-space-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--gf-color-surface-subtle)",
        borderRadius: "var(--gf-radius-lg)",
        padding: "var(--gf-space-md)"
      }}
    >
      {logo && !imageError ? (
        <img
          src={logo}
          alt={`${organization} logo`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
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
  const scrollSpeed = 0.5; // pixels per frame

  // Duplicate involvements for seamless infinite scroll
  const duplicatedInvolvements = [...involvements, ...involvements];

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
      const firstSetWidth = scrollWidth / 2;
      const currentScroll = container.scrollLeft;

      // Increment scroll position
      container.scrollLeft = currentScroll + scrollSpeed;

      // Check if we've reached the duplicate set and reset seamlessly
      if (container.scrollLeft >= firstSetWidth) {
        container.scrollLeft = container.scrollLeft - firstSetWidth;
      }

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
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "var(--gf-space-xl)"
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-text)",
            lineHeight: 1.2
          }}
        >
          Eddie Knight
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--gf-color-text-subtle)",
            marginBottom: "var(--gf-space-lg)",
            maxWidth: "600px"
          }}
        >
          Author, Speaker, Engineer
        </p>
      </section>

      {/* Involvements Section */}
      <section
        id="involvements"
        style={{
          marginBottom: "var(--gf-space-xl)"
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            marginBottom: "var(--gf-space-xl)",
            color: "var(--gf-color-accent)",
            textAlign: "center"
          }}
        >
          Involvements
        </h2>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleUserInteraction}
          onMouseMove={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onTouchMove={handleUserInteraction}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "var(--gf-space-md)",
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
            {duplicatedInvolvements.map((involvement, index) => (
              <a
                key={index}
                href={involvement.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "var(--gf-space-lg)",
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
                  width: "380px",
                  minWidth: "380px",
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

                {/* Organization (medium-small text) */}
                <div
                  style={{
                    fontSize: "1rem",
                    color: "var(--gf-color-text-subtle)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  {involvement.organization}
                </div>

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

      {/* About Section */}
      <section
        id="about"
        style={{
          marginBottom: "var(--gf-space-xl)",
          padding: "var(--gf-space-lg)",
          backgroundColor: "var(--gf-color-surface)",
          borderRadius: "var(--gf-radius-xl)",
          boxShadow: "var(--gf-shadow-surface)",
          backdropFilter: "var(--gf-glass-blur)",
          WebkitBackdropFilter: "var(--gf-glass-blur)"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-accent)"
          }}
        >
          About
        </h2>
        <p
          style={{
            color: "var(--gf-color-text)",
            lineHeight: 1.6,
            fontSize: "1.1rem"
          }}
        >
          Deep in the Heart of Texas
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "var(--gf-space-lg)",
          backgroundColor: "var(--gf-color-surface)",
          borderRadius: "var(--gf-radius-xl)",
          boxShadow: "var(--gf-shadow-surface)",
          backdropFilter: "var(--gf-glass-blur)",
          WebkitBackdropFilter: "var(--gf-glass-blur)",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-accent)"
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            color: "var(--gf-color-text-subtle)",
            marginBottom: "var(--gf-space-lg)",
            fontSize: "1.1rem"
          }}
        >
          Feel free to reach out if you'd like to collaborate or just say hello!
        </p>
      </section>
    </div>
  );
};

