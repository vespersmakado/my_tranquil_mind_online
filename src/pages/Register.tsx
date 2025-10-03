// src/pages/Register.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(""); // ✅ success message

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault(); // stop page reload
    setMessage("🎉 Thanks for signing up! You will soon start to receive helpful notes and quizzes straight to your inbox.");

  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #00bcd4, #6c63ff)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          backdropFilter: "blur(12px)",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "32px",
            color: "#00bcd4",
            fontWeight: 700,
          }}
        >
          Create Account
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#555",
          }}
        >
          Join us and begin your journey ✨
        </p>

        {/* Form */}
        <form onSubmit={handleRegister}>
          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "15px",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #00bcd4")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "15px",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #00bcd4")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px", position: "relative" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "15px",
                outline: "none",
                transition: "0.3s",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #00bcd4")}
              onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "38px",
                cursor: "pointer",
                fontSize: "14px",
                color: "#00bcd4",
                userSelect: "none",
              }}
            >
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </span>
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="btn"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #00bcd4, #6c63ff)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "linear-gradient(135deg, #0097a7, #554fd8)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "linear-gradient(135deg, #00bcd4, #6c63ff)")
            }
          >
            Sign Up
          </button>
        </form>

        {/* ✅ Success message */}
        {message && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "green",
              fontWeight: 600,
            }}
          >
            {message}
          </p>
        )}

        {/* Already have account link */}
        <p style={{ textAlign: "center", marginTop: "25px", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#00bcd4", fontWeight: "600" }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
