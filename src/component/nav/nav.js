      import "./nav.css";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <span className="logo">
        <img src="/image/world.jpg" alt="logo" />
      </span>

      {/* Hamburger Toggle */}
      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Menu */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li className="list-nav">
          <a href="mymy\src\component\main\main.html">Home</a>
        </li>
        <li className="list-nav">
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
}
