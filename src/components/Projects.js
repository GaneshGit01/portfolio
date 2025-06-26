import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on</p>
      <div className="projects-container">
        <div className="project-card">
          <h3>
          <a href="http://food-clone-react-22ffq92by-ganeshgit01s-projects.vercel.app"
          target="_blank"
          rel="opener">DELICIOUS CHINEESE</a>
          </h3>
          <p>A fully responsive food delivery web application built with React.js. It features a sleek UI, menu browsing, cart functionality, and a modern design that simulates a real-world food ordering experience</p>
        </div>
        <div className="project-card">
          <h3>
            <a href="https://fashion-clone-react-cl077y332-ganeshgit01s-projects.vercel.app"
            target="_black"
            rel="open">SHOPZONE</a>
          </h3>
          <p>A fashion eCommerce website clone built using React.js. It mimics an online store with real product images, a dynamic cart, and a stylish design for desktop and mobile.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
