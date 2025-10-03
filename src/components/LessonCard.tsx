// src/components/LessonCard.tsx
import React from "react";

interface LessonCardProps {
  title: string;
  description?: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description }) => {
  return (
    <div className="lesson-card">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default LessonCard;
