// src/layout/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: "#f9f9f9", padding: "15px 0", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <div 
        className="container" 
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        {/* Logo / Title */}
        <h1 style={{ color: "#6c63ff", fontWeight: 700 }}>MyTranquilMind</h1>

        {/* Links on the right */}
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/progress">Progress</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link> {/* <-- now just a normal link */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
