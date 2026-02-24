// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Редирект с корня на /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Главная страница */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Все неизвестные пути тоже на /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
