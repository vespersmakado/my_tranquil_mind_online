// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import Progress from "./pages/Progress";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LessonDetail from "./pages/LessonDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetail />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
