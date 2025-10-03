import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo left */}
        <div className="logo">🌿 MyTranquilMind</div>

        {/* Hamburger toggle (mobile) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* Links right */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lessons">Lessons</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register" className="btn">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
