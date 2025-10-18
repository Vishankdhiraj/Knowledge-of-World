import "./nav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <span className="logo">
        <img src="/image/world.jpg" alt="logo" />
      </span>

      {/* ✅ Dark mode toggle */}
      

      {/* Hamburger Toggle */}
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Menu */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li className="list-nav">
          <Link to="/">Home</Link>
        </li>
        <li className="list-nav">
          <Link to="/about">About</Link>
        </li>
        <li className="list-nav">
          <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
          
        </li>
      </ul>
    </nav>
  );
}
