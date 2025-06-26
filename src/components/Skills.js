import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h1>My Skills</h1>
      <p>Technologies and Tools I've worked with</p>
      <div className="skills-container">
        <div className="skill-card">React.js</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">MongoDB</div>
        <div className="skill-card">Node.js</div>
        <div className="skill-card">Express.js</div>
        <div className="skill-card">HTML</div>
        <div className="skill-card">CSS</div>
        <div className="skill-card">GitHub</div>
      </div>
    </section>
  );
}

export default Skills;
