// src/pages/Progress.tsx
import React, { useEffect, useState } from "react";
import "./Progress.css";

interface Score {
  id: number;
  lesson_title: string;
  score: number;
  passed: number;
  created_at: string;
}

const Progress: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example user_id = 1
    fetch("http://localhost:5000/api/user/1/scores")
      .then((res) => res.json())
      .then((data) => {
        setScores(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching progress:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Loading progress...</h2>;

  return (
    <div className="progress-container">
      <h1 className="page-title">My Progress</h1>
      <table className="progress-table">
        <thead>
          <tr>
            <th>Lesson</th>
            <th>Score</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s) => (
            <tr key={s.id}>
              <td>{s.lesson_title}</td>
              <td>{s.score}%</td>
              <td>
                <span className={s.passed ? "status passed" : "status failed"}>
                  {s.passed ? "Passed ✅" : "Failed ❌"}
                </span>
              </td>
              <td>{new Date(s.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Progress;
