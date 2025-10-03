// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🌿 TranquilMind</div>

      {/* Hamburger icon */}
      <div 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/lessons" onClick={() => setMenuOpen(false)}>Lessons</Link></li>
        <li><Link to="/progress" onClick={() => setMenuOpen(false)}>Progress</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
