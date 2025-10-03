// src/pages/Register.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("Weak");

  const checkStrength = (pwd: string) => {
    setPassword(pwd);
    if (pwd.length > 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
      setStrength("Strong");
    } else if (pwd.length > 5) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating background shapes */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "200px",
          height: "200px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-70px",
          right: "-70px",
          width: "250px",
          height: "250px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
        }}
      ></div>

      {/* Register Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "18px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          backdropFilter: "blur(12px)",
          zIndex: 2,
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "32px",
            color: "#6c63ff",
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
          Join us today and start your mindfulness journey 🌿
        </p>

        <form>
          {/* Full Name */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
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

          {/* Email */}
          <div style={{ marginBottom: "18px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
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
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => checkStrength(e.target.value)}
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
            <p style={{ fontSize: "13px", marginTop: "6px", color: "#888" }}>
              Strength:{" "}
              <span
                style={{
                  color:
                    strength === "Strong"
                      ? "green"
                      : strength === "Medium"
                      ? "#f39c12"
                      : "red",
                  fontWeight: 600,
                }}
              >
                {strength}
              </span>
            </p>
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "22px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
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

          {/* Register Button */}
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
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #554fd8, #0097a7)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #6c63ff, #00bcd4)")
            }
          >
            Register
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

        {/* Social Sign-up */}
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

        {/* Already have account */}
        <p style={{ textAlign: "center", marginTop: "25px", fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#6c63ff", fontWeight: "600" }}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
