import React, { useState } from "react";

interface InvolvementCard {
  title: string;
  organization: string;
  url: string;
  logo?: string;
  description: string;
}

const involvements: InvolvementCard[] = [
  {
    title: "Governing Board",
    organization: "FINOS",
    url: "https://www.finos.org/governing-board",
    logo: "https://www.finos.org/wp-content/uploads/2021/02/finos-logo.svg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Technical Oversight Committee, Chair",
    organization: "FINOS",
    url: "https://www.finos.org/technical-oversight-committee",
    logo: "https://www.finos.org/wp-content/uploads/2021/02/finos-logo.svg",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Common Cloud Controls, Steering Committee",
    organization: "FINOS",
    url: "https://www.finos.org/projects/finos-common-cloud-controls",
    logo: "https://www.finos.org/wp-content/uploads/2021/02/finos-logo.svg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    title: "Technical Lead, TAG Security & Compliance",
    organization: "CNCF",
    url: "https://github.com/cncf/toc/tree/main/tags/tag-security-and-compliance",
    logo: "https://www.cncf.io/wp-content/uploads/2022/07/cncf-logo.svg",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "ORBIT, Working Group Lead",
    organization: "OpenSSF",
    url: "https://github.com/ossf/wg-orbit",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  },
  {
    title: "OSPS Baseline, Author & Maintainer",
    organization: "OpenSSF",
    url: "https://baseline.openssf.org/",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg",
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt."
  },
  {
    title: "Gemara, Author & Maintainer",
    organization: "OpenSSF",
    url: "https://gemara.openssf.org/",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
  },
  {
    title: "Security Insights Specification, Maintainer",
    organization: "OpenSSF",
    url: "https://github.com/ossf/security-insights/tree/main/spec",
    logo: "https://openssf.org/wp-content/uploads/sites/3/2021/06/openssf-logo.svg",
    description: "Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est."
  },
  {
    title: "Privateer Project, Maintainer",
    organization: "Privateer",
    url: "http://privateerproj.com/",
    logo: undefined, // Placeholder
    description: "Dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam, quis nostrum exercitationem."
  },
  {
    title: "Sonatype, OSPO Lead",
    organization: "Sonatype",
    url: "https://sonatype.com/",
    logo: "https://www.sonatype.com/hubfs/2021%20Website%20Redesign%20Assets/Brand/Sonatype-Logo-White.svg",
    description: "Ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum."
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
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "var(--gf-space-md)",
            marginLeft: "calc(-1 * var(--gf-space-xl))",
            marginRight: "calc(-1 * var(--gf-space-xl))",
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
            {involvements.map((involvement, index) => (
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

                {/* Organization */}
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--gf-color-text-subtle)",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  {involvement.organization}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    marginBottom: "var(--gf-space-md)",
                    color: "var(--gf-color-text)",
                    lineHeight: 1.3
                  }}
                >
                  {involvement.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: "var(--gf-color-text-subtle)",
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                    marginBottom: "var(--gf-space-md)",
                    flex: 1
                  }}
                >
                  {involvement.description}
                </p>

                {/* Link indicator */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--gf-color-accent)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    marginTop: "auto"
                  }}
                >
                  <span>Learn more</span>
                  <span>↗</span>
                </div>
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

