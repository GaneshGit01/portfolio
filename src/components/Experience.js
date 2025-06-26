import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h1>My Experience</h1>
      <p>Experience in the tech field and web development</p>
      <div className="experience-timeline">
        <div className="experience-card">
          <h3>React JS Developer</h3>
          <p>Coder Proffession</p>
          <p>Internship | 2023-2024</p>
          <ul>
            <li>Developed modern React applications</li>
            <li>MERN stack development</li>
          </ul>
        </div>
        {/* <div className="experience-card">
          <h3>Web Developer Intern</h3>
          <p>Company ABC | 2022-2023</p>
          <ul>
            <li>Worked on full-stack web development</li>
            <li>Participated in project planning and code reviews</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default Experience;
