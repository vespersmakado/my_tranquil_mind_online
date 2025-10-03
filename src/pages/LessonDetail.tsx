// src/pages/LessonDetail.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { LESSONS_DATA, QUIZZES_DATA } from "../data";
import "./LessonDetail.css";

const OPTION_KEYS: Array<"A" | "B" | "C" | "D"> = ["A", "B", "C", "D"];

const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lessonId = Number(id);

  const lesson = LESSONS_DATA.find((l) => l.id === lessonId);
  const quizzes = QUIZZES_DATA.filter((q) => q.lessonId === lessonId);

  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) return <h2>Lesson not found</h2>;

  const handleOptionChange = (quizIndex: number, option: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({ ...prev, [quizIndex]: option }));
  };

  const handleSubmit = () => setSubmitted(true);

  const score = quizzes.reduce((acc, quiz, idx) => (answers[idx] === quiz.correctOption ? acc + 1 : acc), 0);

  return (
    <div className="lesson-detail">
      <h1 className="lesson-title">{lesson.title}</h1>
      <div className="lesson-content" style={{ whiteSpace: "pre-line" }}>{lesson.content}</div>

      <h2>Quiz</h2>

      {quizzes.length === 0 ? (
        <p>No quizzes available for this lesson.</p>
      ) : (
        <form
          className="quiz-section"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {quizzes.map((quiz, index) => (
            <div key={index} className="quiz-card">
              <p className="quiz-question">{`Q${index + 1}: ${quiz.question}`}</p>

              {OPTION_KEYS.map((k) => (
                <label key={k} className="quiz-option">
                  <input
                    type="radio"
                    name={`quiz-${index}`}
                    value={k}
                    checked={answers[index] === k}
                    onChange={() => handleOptionChange(index, k)}
                    disabled={submitted}
                    style={{ marginRight: 8 }}
                  />
                  <strong>{k}.</strong> {quiz.options[k]}
                </label>
              ))}

              {submitted && (
                <p className={`quiz-feedback ${answers[index] === quiz.correctOption ? "correct" : "incorrect"}`}>
                  {answers[index] === quiz.correctOption
                    ? "✅ Correct!"
                    : `❌ Incorrect. Correct: ${quiz.correctOption}. ${quiz.options[quiz.correctOption]}`}
                </p>
              )}
            </div>
          ))}

          {!submitted ? (
            <button type="submit" className="quiz-submit-btn">Submit Quiz</button>
          ) : (
            <p className="quiz-score">🎯 You scored {score} out of {quizzes.length}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default LessonDetail;
