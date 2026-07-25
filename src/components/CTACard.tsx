import React from "react";
import { Link } from "react-router-dom";

interface CTACardProps {
  id?: string;
  title: string;
  paragraphs: (string | React.ReactNode)[];
  buttonText: string;
  buttonDisabled?: boolean;
}

export const CTACard: React.FC<CTACardProps> = ({
  id,
  title,
  paragraphs,
  buttonText,
  buttonDisabled = true
}) => {
  return (
    <section id={id} className="cta-card">
      <h2>{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="cta-card-body">
          {paragraph}
        </p>
      ))}
      {/* Pushed to the bottom so buttons line up when cards sit side by side. */}
      <div className="cta-card-action">
        {buttonDisabled ? (
          <span className="cta-button cta-button-disabled" aria-disabled="true">
            {buttonText}
          </span>
        ) : (
          <Link className="cta-button" to="/apply">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};
