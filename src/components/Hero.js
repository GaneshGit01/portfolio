import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <h1>
        Hi, I'm <span className="highlight">Ganesh Kumar S</span>
      </h1>
      <p>I'm a passionate React Developer & Web Enthusiast</p>
      <a
        href="/Ganeshkumar  Front-End Developer  CV.pdf"
        className="hero-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>
  );
}

export default Hero;
