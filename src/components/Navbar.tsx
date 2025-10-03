import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🌿 TranquilMind</div>
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/lessons" onClick={() => setIsOpen(false)}>Lessons</Link></li>
          <li><Link to="/progress" onClick={() => setIsOpen(false)}>Progress</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li><Link to="/register" onClick={() => setIsOpen(false)}>Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
