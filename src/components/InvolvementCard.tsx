import React from "react";
import { LogoComponent } from "./LogoComponent";

interface InvolvementCardProps {
  title: string;
  organization: string;
  url: string;
  logo?: string;
  /** Repeated copy in a looping rail: hidden from assistive tech and tab order. */
  decorative?: boolean;
}

export const InvolvementCard: React.FC<InvolvementCardProps> = ({
  title,
  organization,
  url,
  logo,
  decorative = false
}) => {
  const parts = title.split(", ");
  const projectName = parts[0];
  const role = parts.slice(1).join(", ");

  return (
    <a
      className="involvement-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={decorative || undefined}
      tabIndex={decorative ? -1 : undefined}
    >
      <LogoComponent logo={logo} organization={organization} />
      <h3 className="involvement-card-title">{projectName}</h3>
      {role && <div className="involvement-card-role">{role}</div>}
    </a>
  );
};
