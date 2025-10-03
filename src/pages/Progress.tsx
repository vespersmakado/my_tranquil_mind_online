// src/pages/Progress.tsx
import React, { useState } from "react";
import "./Progress.css";

interface TopScorer {
  name: string;
  score: number;
  bestLesson: string;
}

const Progress: React.FC = () => {
  // ✅ Static top scorers
  const topScorers: TopScorer[] = [
    { name: "Cherryl Mupira", score: 90, bestLesson: "Mindful Relationships" },
    { name: "Uphold Chiodza", score: 89, bestLesson: "Breathing Techniques" },
    { name: "Carol Mtetwa", score: 89, bestLesson: "Daily Gratitude" },
    { name: "Marvel Lungu", score: 88, bestLesson: "Overcoming Distractions" },
    { name: "Victory Makado", score: 87, bestLesson: "Introduction to Mindfulness" },
    { name: "Rutendo Dengu", score: 86, bestLesson: "Daily Gratitude" },
    { name: "Tafara Shumba", score: 86, bestLesson: "Overcoming Distractions" },
    { name: "Gift Hlahla", score: 85, bestLesson: "Mindful Relationships" },
    { name: "Vespers Makado", score: 83, bestLesson: "Introduction to Mindfulness" },
    { name: "Edmore Bhuru", score: 82, bestLesson: "Breathing Techniques" },
  ];

  // ✅ States for forms
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [reminderDate, setReminderDate] = useState("");
  const [reminderMessage, setReminderMessage] = useState("");

  const [reportEmail, setReportEmail] = useState("");
  const [reportMessage, setReportMessage] = useState("");

  // ✅ Handlers
  const handleMarkRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailMessage("📩 Request sent successfully! You’ll receive your marks & ranking soon.");
    setEmail("");
  };

  const handleReminder = (e: React.FormEvent) => {
    e.preventDefault();
    setReminderMessage("⏰ Reminder set successfully for your chosen lesson!");
    setReminderDate("");
  };

  const handleReportRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setReportMessage("📄 Report request sent successfully! It will be delivered to your email.");
    setReportEmail("");
  };

  return (
    <div className="progress-container">
      <h1 className="page-title">📊 My Progress</h1>

      {/* Leaderboard */}
      <section className="leaderboard">
        <h2>🏆 Top Scorers</h2>
        <table className="progress-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Score</th>
              <th>Best Lesson</th>
            </tr>
          </thead>
          <tbody>
            {topScorers.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.score}%</td>
                <td>{s.bestLesson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Request own mark */}
      <section className="mark-request">
        <h2>📩 Request Your Own Mark & Ranking</h2>
        <form onSubmit={handleMarkRequest}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Request</button>
        </form>
        {emailMessage && <p className="success-msg">{emailMessage}</p>}
      </section>

      {/* Reminder */}
      <section className="reminder-section">
        <h2>⏰ Set a Reminder for a Lesson</h2>
        <form onSubmit={handleReminder}>
          <input
            type="datetime-local"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
            required
          />
          <button type="submit">Set Reminder</button>
        </form>
        {reminderMessage && <p className="success-msg">{reminderMessage}</p>}
      </section>

      {/* Reports */}
      <section className="sample-reports">
        <h2>📄 Sample Reports</h2>
        <div className="report-card">
          <h3>Cherryl Mupira – 90%</h3>
          <p>
            Cherryl participated in the program and passed with excellence. She is now equipped
            with strong mindfulness practices, mental health resilience, and emotional intelligence.
          </p>
        </div>
        <div className="report-card">
          <h3>Uphold Chiodza – 89%</h3>
          <p>
            Uphold successfully completed the lessons, showing dedication and focus. He is now
            empowered with tools for stress management and mindful living.
          </p>
        </div>
        <div className="report-card">
          <h3>Carol Mtetwa – 89%</h3>
          <p>
            Carol excelled in the course, demonstrating excellent mastery of gratitude practices.
            She has grown in emotional balance, clarity, and compassionate awareness.
          </p>
        </div>
      </section>

      {/* Request Report */}
      <section className="report-request">
        <h2>📬 Request Your Full Report</h2>
        <form onSubmit={handleReportRequest}>
          <input
            type="email"
            placeholder="Enter your email"
            value={reportEmail}
            onChange={(e) => setReportEmail(e.target.value)}
            required
          />
          <button type="submit">Request Report</button>
        </form>
        {reportMessage && <p className="success-msg">{reportMessage}</p>}
      </section>
    </div>
  );
};

export default Progress;
