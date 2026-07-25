import React from "react";

interface PillarCardProps {
  title: string;
  description: string;
}

export const PillarCard: React.FC<PillarCardProps> = ({ title, description }) => {
  return (
    <div className="pillar-card">
      <h3>{title}</h3>
      <p className="pillar-card-body">{description}</p>
    </div>
  );
};
