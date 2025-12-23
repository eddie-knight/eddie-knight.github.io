import React from "react";

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
          minHeight: "60vh",
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
          Welcome to My Website
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--gf-color-text-subtle)",
            marginBottom: "var(--gf-space-lg)",
            maxWidth: "600px"
          }}
        >
          A brief introduction or tagline goes here. This is a wireframe that you can extend with your own content.
        </p>
        <button
          style={{
            padding: "0.75rem 2rem",
            backgroundColor: "var(--gf-color-accent)",
            color: "var(--gf-color-button-text)",
            border: "none",
            borderRadius: "var(--gf-radius-pill)",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "var(--gf-shadow-surface)",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "var(--gf-shadow-surface-strong)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "var(--gf-shadow-surface)";
          }}
        >
          Get Started
        </button>
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
          This is a placeholder for your about section. Add your bio, skills, experience, or anything else you'd like to share.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          marginBottom: "var(--gf-space-xl)"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "var(--gf-space-lg)",
            color: "var(--gf-color-accent)",
            textAlign: "center"
          }}
        >
          Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--gf-space-lg)"
          }}
        >
          {/* Project Card 1 */}
          <div
            style={{
              padding: "var(--gf-space-lg)",
              backgroundColor: "var(--gf-color-surface)",
              borderRadius: "var(--gf-radius-xl)",
              boxShadow: "var(--gf-shadow-surface)",
              backdropFilter: "var(--gf-glass-blur)",
              WebkitBackdropFilter: "var(--gf-glass-blur)",
              border: "1px solid var(--gf-color-border-strong)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              Project 1
            </h3>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                marginBottom: "var(--gf-space-md)",
                lineHeight: 1.6
              }}
            >
              Description of your project goes here. Add details about what it does, technologies used, and key features.
            </p>
            <a
              href="#"
              style={{
                color: "var(--gf-color-accent)",
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              View Project →
            </a>
          </div>

          {/* Project Card 2 */}
          <div
            style={{
              padding: "var(--gf-space-lg)",
              backgroundColor: "var(--gf-color-surface)",
              borderRadius: "var(--gf-radius-xl)",
              boxShadow: "var(--gf-shadow-surface)",
              backdropFilter: "var(--gf-glass-blur)",
              WebkitBackdropFilter: "var(--gf-glass-blur)",
              border: "1px solid var(--gf-color-border-strong)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              Project 2
            </h3>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                marginBottom: "var(--gf-space-md)",
                lineHeight: 1.6
              }}
            >
              Another project description. You can add as many project cards as you need.
            </p>
            <a
              href="#"
              style={{
                color: "var(--gf-color-accent)",
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              View Project →
            </a>
          </div>

          {/* Project Card 3 */}
          <div
            style={{
              padding: "var(--gf-space-lg)",
              backgroundColor: "var(--gf-color-surface)",
              borderRadius: "var(--gf-radius-xl)",
              boxShadow: "var(--gf-shadow-surface)",
              backdropFilter: "var(--gf-glass-blur)",
              WebkitBackdropFilter: "var(--gf-glass-blur)",
              border: "1px solid var(--gf-color-border-strong)"
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              Project 3
            </h3>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                marginBottom: "var(--gf-space-md)",
                lineHeight: 1.6
              }}
            >
              A third project card to show the grid layout. Customize these as needed.
            </p>
            <a
              href="#"
              style={{
                color: "var(--gf-color-accent)",
                textDecoration: "none",
                fontWeight: 600
              }}
            >
              View Project →
            </a>
          </div>
        </div>
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
        <button
          style={{
            padding: "0.75rem 2rem",
            backgroundColor: "var(--gf-color-accent)",
            color: "var(--gf-color-button-text)",
            border: "none",
            borderRadius: "var(--gf-radius-pill)",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "var(--gf-shadow-surface)",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "var(--gf-shadow-surface-strong)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "var(--gf-shadow-surface)";
          }}
        >
          Contact Me
        </button>
      </section>
    </div>
  );
};

