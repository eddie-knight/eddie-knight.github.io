import React, { useState } from "react";

export const ApplicationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    context: "",
    stakes: "",
    stakeholders: "",
    window: "",
    name: "",
    email: "",
    company: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only for now - no backend integration
    alert("Thank you for your application. This form is currently UI-only and submissions are not being processed.");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Header Section */}
      <section
        id="header"
        style={{
          marginBottom: "var(--gf-space-xl)",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "var(--gf-space-md)",
            color: "var(--gf-color-accent)",
            lineHeight: 1.2
          }}
        >
          High-Impact Advisory (Limited Availability)
        </h1>
        <p
          style={{
            color: "var(--gf-color-text-subtle)",
            fontSize: "1.25rem",
            lineHeight: 1.7,
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          I only take on one or two advisory projects at a time to ensure I can provide the deep focus required to solve complex problems. Please provide a brief overview of the "impossible" situation you're currently facing.
        </p>
      </section>

      {/* Form Section */}
      <section
        id="application-form"
        style={{
          padding: "var(--gf-space-xl)",
          backgroundColor: "var(--gf-color-surface)",
          borderRadius: "var(--gf-radius-xl)",
          boxShadow: "var(--gf-shadow-surface)",
          backdropFilter: "var(--gf-glass-blur)",
          WebkitBackdropFilter: "var(--gf-glass-blur)",
          border: "1px solid var(--gf-color-border-strong)"
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* The Context */}
          <div style={{ marginBottom: "var(--gf-space-xl)" }}>
            <label
              htmlFor="context"
              style={{
                display: "block",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              The Context
            </label>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                fontSize: "0.95rem",
                marginBottom: "var(--gf-space-md)"
              }}
            >
              What is the specific strategic bottleneck or "knot" that needs untangling?
            </p>
            <textarea
              id="context"
              name="context"
              value={formData.context}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: "100%",
                padding: "var(--gf-space-md)",
                backgroundColor: "var(--gf-color-surface-subtle)",
                border: "1px solid var(--gf-color-border-strong)",
                borderRadius: "var(--gf-radius-lg)",
                color: "var(--gf-color-text)",
                fontSize: "1rem",
                fontFamily: "var(--gf-font-body)",
                resize: "vertical",
                minHeight: "120px"
              }}
            />
          </div>

          {/* The Stakes */}
          <div style={{ marginBottom: "var(--gf-space-xl)" }}>
            <label
              htmlFor="stakes"
              style={{
                display: "block",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              The Stakes
            </label>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                fontSize: "0.95rem",
                marginBottom: "var(--gf-space-md)"
              }}
            >
              What happens if this isn't resolved in the next six months?
            </p>
            <textarea
              id="stakes"
              name="stakes"
              value={formData.stakes}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: "100%",
                padding: "var(--gf-space-md)",
                backgroundColor: "var(--gf-color-surface-subtle)",
                border: "1px solid var(--gf-color-border-strong)",
                borderRadius: "var(--gf-radius-lg)",
                color: "var(--gf-color-text)",
                fontSize: "1rem",
                fontFamily: "var(--gf-font-body)",
                resize: "vertical",
                minHeight: "120px"
              }}
            />
          </div>

          {/* The Stakeholders */}
          <div style={{ marginBottom: "var(--gf-space-xl)" }}>
            <label
              htmlFor="stakeholders"
              style={{
                display: "block",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              The Stakeholders
            </label>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                fontSize: "0.95rem",
                marginBottom: "var(--gf-space-md)"
              }}
            >
              Who has skin in this game? (C-Suite, Engineering Leads, Regulators?)
            </p>
            <textarea
              id="stakeholders"
              name="stakeholders"
              value={formData.stakeholders}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: "100%",
                padding: "var(--gf-space-md)",
                backgroundColor: "var(--gf-color-surface-subtle)",
                border: "1px solid var(--gf-color-border-strong)",
                borderRadius: "var(--gf-radius-lg)",
                color: "var(--gf-color-text)",
                fontSize: "1rem",
                fontFamily: "var(--gf-font-body)",
                resize: "vertical",
                minHeight: "100px"
              }}
            />
          </div>

          {/* The Window */}
          <div style={{ marginBottom: "var(--gf-space-xl)" }}>
            <label
              htmlFor="window"
              style={{
                display: "block",
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-md)",
                color: "var(--gf-color-text)"
              }}
            >
              The Window
            </label>
            <p
              style={{
                color: "var(--gf-color-text-subtle)",
                fontSize: "0.95rem",
                marginBottom: "var(--gf-space-md)"
              }}
            >
              Is this a one-time "Surgical Strike" or a long-term strategic guidance need?
            </p>
            <select
              id="window"
              name="window"
              value={formData.window}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "var(--gf-space-md)",
                backgroundColor: "var(--gf-color-surface-subtle)",
                border: "1px solid var(--gf-color-border-strong)",
                borderRadius: "var(--gf-radius-lg)",
                color: "var(--gf-color-text)",
                fontSize: "1rem",
                fontFamily: "var(--gf-font-body)",
                cursor: "pointer"
              }}
            >
              <option value="">Select an option</option>
              <option value="surgical-strike">One-time "Surgical Strike"</option>
              <option value="long-term">Long-term Strategic Guidance</option>
            </select>
          </div>

          {/* Contact Information */}
          <div style={{ marginBottom: "var(--gf-space-xl)" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "var(--gf-space-lg)",
                color: "var(--gf-color-accent)"
              }}
            >
              Contact Information
            </h3>
            
            <div style={{ marginBottom: "var(--gf-space-lg)" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "var(--gf-space-md)",
                  color: "var(--gf-color-text)"
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "var(--gf-space-md)",
                  backgroundColor: "var(--gf-color-surface-subtle)",
                  border: "1px solid var(--gf-color-border-strong)",
                  borderRadius: "var(--gf-radius-lg)",
                  color: "var(--gf-color-text)",
                  fontSize: "1rem",
                  fontFamily: "var(--gf-font-body)"
                }}
              />
            </div>

            <div style={{ marginBottom: "var(--gf-space-lg)" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "var(--gf-space-md)",
                  color: "var(--gf-color-text)"
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "var(--gf-space-md)",
                  backgroundColor: "var(--gf-color-surface-subtle)",
                  border: "1px solid var(--gf-color-border-strong)",
                  borderRadius: "var(--gf-radius-lg)",
                  color: "var(--gf-color-text)",
                  fontSize: "1rem",
                  fontFamily: "var(--gf-font-body)"
                }}
              />
            </div>

            <div style={{ marginBottom: "var(--gf-space-lg)" }}>
              <label
                htmlFor="company"
                style={{
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "var(--gf-space-md)",
                  color: "var(--gf-color-text)"
                }}
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "var(--gf-space-md)",
                  backgroundColor: "var(--gf-color-surface-subtle)",
                  border: "1px solid var(--gf-color-border-strong)",
                  borderRadius: "var(--gf-radius-lg)",
                  color: "var(--gf-color-text)",
                  fontSize: "1rem",
                  fontFamily: "var(--gf-font-body)"
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              style={{
                padding: "var(--gf-space-lg) var(--gf-space-xl)",
                backgroundColor: "var(--gf-color-accent)",
                color: "var(--gf-color-button-text)",
                borderRadius: "var(--gf-radius-lg)",
                fontSize: "1.25rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
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
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

