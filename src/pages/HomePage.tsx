import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  {
    title: "Open Source Program Office, Lead",
    organization: "Sonatype",
    url: "https://sonatype.com/",
    logo: sonatypeLogo
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
  const location = useLocation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const isUserInteractingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const scrollSpeed = 0.5; // pixels per frame

  // Duplicate affiliations for seamless infinite scroll
  const duplicatedaffiliations = [...affiliations, ...affiliations];

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
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            marginBottom: 0,
            color: "var(--gf-color-text)",
            lineHeight: 1.1,
            maxWidth: "900px"
          }}
        >
          Eddie Knight
        </h1>
        <p
          style={{
            fontSize: "2rem",
            color: "var(--gf-color-text-subtle)",
            marginTop: "0.5rem",
            marginBottom: "var(--gf-space-lg)",
            lineHeight: 1.6
          }}
        >
          Strategic Advisory
        </p>
        <nav
          style={{
            display: "flex",
            gap: "var(--gf-space-md)",
            alignItems: "center",
            marginTop: "var(--gf-space-md)"
          }}
        >
          <Link
            to="/"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Home
          </Link>
          <Link
            to="/bio"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/bio" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/bio") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/bio") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Bio
          </Link>
          <Link
            to="/apply"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/apply" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/apply") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/apply") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Apply
          </Link>
        </nav>
      </section>

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
          onMouseMove={handleUserInteraction}
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


      {/* Problem Section */}
      <section
        id="problem"
        style={{
          marginBottom: "var(--gf-space-xl)",
          padding: "var(--gf-space-xl)",
          backgroundColor: "var(--gf-color-surface)",
          borderRadius: "var(--gf-radius-xl)",
          boxShadow: "var(--gf-shadow-surface)",
          backdropFilter: "var(--gf-glass-blur)",
          WebkitBackdropFilter: "var(--gf-glass-blur)",
          border: "1px solid var(--gf-color-border-strong)"
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-accent)"
          }}
        >
          Is your GRC a bottleneck or a bridge?
        </h2>
        <p
          style={{
            color: "var(--gf-color-text)",
            lineHeight: 1.8,
            fontSize: "1.25rem"
          }}
        >
          Most organizations treat compliance as a tax on engineering. I treat it as an engineering discipline. If your Open Source strategy is fragmented, your cloud controls are opaque, or your security posture is slowing your release cycles—we should talk.
        </p>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        style={{
          marginBottom: "var(--gf-space-xl)",
          textAlign: "center"
        }}
      >
        <Link
          to="/apply"
          style={{
            display: "inline-block",
            padding: "var(--gf-space-lg) var(--gf-space-xl)",
            backgroundColor: "var(--gf-color-accent)",
            color: "var(--gf-color-button-text)",
            borderRadius: "var(--gf-radius-lg)",
            fontSize: "1.25rem",
            fontWeight: 600,
            textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "var(--gf-shadow-surface)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "var(--gf-shadow-surface-strong)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--gf-shadow-surface)";
          }}
        >
          Apply for a Strategic Intensive
        </Link>
      </section>

    </div>
  );
};

