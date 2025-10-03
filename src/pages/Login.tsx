// src/pages/Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #6c63ff, #00bcd4)",
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
            color: "#6c63ff",
            fontWeight: 700,
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#555",
          }}
        >
          Log in to continue your mindfulness journey ✨
        </p>

        {/* Form */}
        <form>
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
              onFocus={(e) => (e.target.style.border = "1px solid #6c63ff")}
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
              placeholder="Enter your password"
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
              onFocus={(e) => (e.target.style.border = "1px solid #6c63ff")}
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
                color: "#6c63ff",
                userSelect: "none",
              }}
            >
              {showPassword ? "🙈 Hide" : "👁 Show"}
            </span>
          </div>

          {/* Remember & Forgot */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
              <input type="checkbox" style={{ marginRight: "6px" }} /> Remember me
            </label>
            <Link
              to="/forgot-password"
              style={{ color: "#6c63ff", fontSize: "14px", textDecoration: "none" }}
            >
              Forgot password?
            </Link>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="btn"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #6c63ff, #00bcd4)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "linear-gradient(135deg, #554fd8, #0097a7)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "linear-gradient(135deg, #6c63ff, #00bcd4)")
            }
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div
          style={{
            margin: "25px 0",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }} />
          <span style={{ margin: "0 12px", color: "#888" }}>OR</span>
          <hr style={{ flex: 1, border: "none", borderTop: "1px solid #ddd" }} />
        </div>

        {/* Social Login */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            🔵 Google
          </button>
          <button
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            🔷 Facebook
          </button>
        </div>

        {/* Sign up link */}
        <p style={{ textAlign: "center", marginTop: "25px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#6c63ff", fontWeight: "600" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

