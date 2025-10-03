// src/pages/Lessons.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Lessons.css";
import { LESSONS_DATA, Lesson } from "../data/lessons"; // ✅ import data

const Lessons: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLessons(LESSONS_DATA); // ✅ now pulling from central data
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <h2 className="loading">Loading lessons...</h2>;

  return (
    <div className="lessons-container">
      <h1 className="page-title">Explore Lessons</h1>
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="lesson-card">
            <h2 className="lesson-title">{lesson.title}</h2>
            <p className="lesson-content">
              {lesson.content.length > 100
                ? lesson.content.substring(0, 100) + "..."
                : lesson.content}
            </p>
            <Link to={`/lessons/${lesson.id}`} className="lesson-btn">
              Start Lesson
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
