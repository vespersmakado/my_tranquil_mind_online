import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">🌿 TranquilMind</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lessons">Lessons</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
