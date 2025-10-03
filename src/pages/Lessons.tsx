// src/pages/Lessons.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Lessons.css";

interface Lesson {
  id: number;
  title: string;
  content: string;
}

const Lessons: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/lessons")
      .then((res) => res.json())
      .then((data) => {
        setLessons(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching lessons:", err);
        setLoading(false);
      });
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
