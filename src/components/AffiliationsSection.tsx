import React, { useState, useRef, useEffect } from "react";
import { InvolvementCard } from "./InvolvementCard";
import finosLogo from "../public/logos/FINOS_Icon_Wordmark_Name_horz_White.svg";
import finosCccLogo from "../public/logos/2023_FinosCCC_Horizontal_WHT.svg";
import cncfLogo from "../public/logos/cncf-white.svg";
import openssfLogo from "../public/logos/Open-SSF-Logo-horizontal-colorwhite.svg";
import orbitLogo from "../public/logos/orbit_logo.svg";
import baselineLogo from "../public/logos/baseline_logo.png";
import gemaraLogo from "../public/logos/gemara-logo.png";
import privateerLogo from "../public/logos/privateer-icon.png";
import sonatypeLogo from "../public/logos/Sonatype_logo_white.svg";

interface InvolvementCardData {
  title: string;
  organization: string;
  url: string;
  logo?: string;
}

const affiliations: InvolvementCardData[] = [
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

export const AffiliationsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const isUserInteractingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const lastScrollPositionRef = useRef<number>(0);
  const scrollSpeed = 0.5; // pixels per frame

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
            <InvolvementCard
              key={index}
              title={involvement.title}
              organization={involvement.organization}
              url={involvement.url}
              logo={involvement.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

