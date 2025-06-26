import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
