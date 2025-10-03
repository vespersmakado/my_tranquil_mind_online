// src/layout/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: "#fff", padding: "15px 0", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ color: "#6c63ff", fontWeight: 700 }}>MyTranquilMind</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/lessons">Lessons</Link>
          <li>
  <Link to="/progress">Progress</Link>
</li>

          <Link to="/login">Login</Link>
          <Link to="/register" className="btn">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
