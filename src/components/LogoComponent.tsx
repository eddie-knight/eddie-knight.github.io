import React, { useState } from "react";

interface LogoComponentProps {
  logo?: string;
  organization: string;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({ logo, organization }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="logo-frame">
      {logo && !imageError ? (
        <img
          src={logo}
          alt={`${organization} logo`}
          loading="lazy"
          decoding="async"
          className="logo-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="logo-fallback">{organization.charAt(0)}</div>
      )}
    </div>
  );
};
