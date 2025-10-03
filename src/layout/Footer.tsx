// src/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "20px 0",
        marginTop: "40px",
      }}
    >
      <div className="container" style={{ textAlign: "center", lineHeight: "1.6" }}>
        <p>&copy; {new Date().getFullYear()} MyTranquilMind. All rights reserved.</p>
        <p>Created by <strong>Vespers Makado</strong></p>
        <p>
          Contact:{" "}
          <a
            href="mailto:vespersmakado@gmail.com"
            style={{ color: "#1abc9c", textDecoration: "none" }}
          >
            vespersmakado@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
