// src/layout/Footer.tsx
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MyTranquilMind. All rights reserved.</p>
        <p>Created by <strong>Vespers Makado</strong></p>
        <p>
          Contact:{" "}
          <a href="mailto:vespersmakado@gmail.com">
            vespersmakado@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
