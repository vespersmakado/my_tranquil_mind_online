// src/pages/LessonDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Lesson {
  id: number;
  title: string;
  content: string;
}

interface Quiz {
  id: number;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_option: string;
}

const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch lesson content
    fetch(`http://localhost:5000/api/lessons/${id}`)
      .then((res) => res.json())
      .then((data) => setLesson(data));

    // Fetch quizzes for this lesson
    fetch(`http://localhost:5000/api/lessons/${id}/quizzes`)
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, [id]);

  const handleOptionChange = (quizId: number, option: string) => {
    setAnswers({ ...answers, [quizId]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "30px auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      {lesson && (
        <>
          <h1 style={{ color: "#2c3e50", marginBottom: "15px" }}>{lesson.title}</h1>
          <p style={{ lineHeight: "1.7", color: "#555", marginBottom: "30px" }}>{lesson.content}</p>
        </>
      )}

      <h2 style={{ color: "#34495e", marginBottom: "20px" }}>Quiz</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available for this lesson.</p>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          {quizzes.map((quiz) => (
            <div key={quiz.id} style={{ marginBottom: "25px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px", background: "#f9f9f9" }}>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{quiz.question}</p>
              {["A", "B", "C", "D"].map((option) => {
                const optionText = (quiz as any)[`option_${option.toLowerCase()}`];
                return (
                  <label key={option} style={{ display: "block", marginBottom: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name={`quiz-${quiz.id}`}
                      value={option}
                      checked={answers[quiz.id] === option}
                      onChange={() => handleOptionChange(quiz.id, option)}
                      style={{ marginRight: "8px" }}
                    />
                    {option}. {optionText}
                  </label>
                );
              })}
              {submitted && (
                <p style={{ marginTop: "10px", fontWeight: "bold", color: answers[quiz.id] === quiz.correct_option ? "green" : "red" }}>
                  {answers[quiz.id] === quiz.correct_option ? "✅ Correct" : `❌ Incorrect. Correct answer: ${quiz.correct_option}`}
                </p>
              )}
            </div>
          ))}

          {!submitted && (
            <button type="submit" style={{ padding: "10px 20px", background: "#2980b9", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
              Submit Quiz
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default LessonDetail;
