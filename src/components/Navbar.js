import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={menuOpen ? "line open" : "line"}></div>
        <div className={menuOpen ? "line open" : "line"}></div>
        <div className={menuOpen ? "line open" : "line"}></div>
      </div>
    </nav>
  );
}

export default Navbar;
