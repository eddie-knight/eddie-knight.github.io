import React from "react";

export const BioPage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* The Narrative Section */}
      <section
        id="narrative"
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
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "var(--gf-space-lg)",
            color: "var(--gf-color-accent)",
            lineHeight: 1.2
          }}
        >
          I don't just consult on standards; I help write them.
        </h1>
        <p
          style={{
            color: "var(--gf-color-text)",
            lineHeight: 1.8,
            fontSize: "1.25rem",
            marginBottom: "var(--gf-space-md)"
          }}
        >
          My work sits at the intersection of high-scale engineering and global governance. As the Chair of the FINOS Technical Oversight Committee and a Lead at the CNCF and OpenSSF, I spend my days defining how the world's most critical financial and cloud infrastructure stays secure and compliant.
        </p>
      </section>

      {/* My Superpowers Section */}
      <section
        id="superpowers"
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
          My Superpowers
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--gf-space-lg)"
          }}
        >
          {/* Organizational Alignment */}
          <div
            style={{
              padding: "var(--gf-space-xl)",
              backgroundColor: "var(--gf-color-surface)",
              borderRadius: "var(--gf-radius-xl)",
              boxShadow: "var(--gf-shadow-surface)",
              backdropFilter: "var(--gf-glass-blur)",
              WebkitBackdropFilter: "var(--gf-glass-blur)",
              border: "1px solid var(--gf-color-border-strong)",
              transition: "transform 0.2s, box-shadow 0.2s"
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
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-accent)"
              }}
            >
              Organizational Alignment
            </h3>
            <p
              style={{
                color: "var(--gf-color-text)",
                lineHeight: 1.7,
                fontSize: "1.1rem"
              }}
            >
              I bridge the gap between the boardroom's risk requirements and the engineering team's delivery goals.
            </p>
          </div>

          {/* Ecosystem Navigation */}
          <div
            style={{
              padding: "var(--gf-space-xl)",
              backgroundColor: "var(--gf-color-surface)",
              borderRadius: "var(--gf-radius-xl)",
              boxShadow: "var(--gf-shadow-surface)",
              backdropFilter: "var(--gf-glass-blur)",
              WebkitBackdropFilter: "var(--gf-glass-blur)",
              border: "1px solid var(--gf-color-border-strong)",
              transition: "transform 0.2s, box-shadow 0.2s"
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
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-accent)"
              }}
            >
              Ecosystem Navigation
            </h3>
            <p
              style={{
                color: "var(--gf-color-text)",
                lineHeight: 1.7,
                fontSize: "1.1rem"
              }}
            >
              I leverage a global network of maintainers and policy-makers to ensure your internal projects align with where the industry is moving—not where it was five years ago.
            </p>
          </div>

          {/* Strategic Remediation */}
          <div
            style={{
              padding: "var(--gf-space-xl)",
              backgroundColor: "var(--gf-color-surface)",
              borderRadius: "var(--gf-radius-xl)",
              boxShadow: "var(--gf-shadow-surface)",
              backdropFilter: "var(--gf-glass-blur)",
              WebkitBackdropFilter: "var(--gf-glass-blur)",
              border: "1px solid var(--gf-color-border-strong)",
              transition: "transform 0.2s, box-shadow 0.2s"
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
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-accent)"
              }}
            >
              Strategic Remediation
            </h3>
            <p
              style={{
                color: "var(--gf-color-text)",
                lineHeight: 1.7,
                fontSize: "1.1rem"
              }}
            >
              I specialize in "clean-up" operations—taking complex, stalled, or fragmented initiatives and rebuilding them into high-performing, compliant systems.
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section
        id="current-focus"
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
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-accent)"
          }}
        >
          Current Focus
        </h2>
        <p
          style={{
            color: "var(--gf-color-text)",
            lineHeight: 1.8,
            fontSize: "1.25rem"
          }}
        >
          I am currently 80% dedicated to building a next-generation GRC Engineering startup. I reserve the remaining 20% of my time for high-impact advisory roles where I can move the needle for organizations facing existential governance or engineering hurdles.
        </p>
      </section>
    </div>
  );
};

