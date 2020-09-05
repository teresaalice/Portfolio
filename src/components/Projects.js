import React from "react";
import PROJECTS from "../data/projects";

const Project = (props) => {
  const { title, image, description, link } = props.project;
  return (
    <div style={{ display: "inline-block", width: 400, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ width: 200 }} />
      <p>{description}</p>
      <a href={link}>Click me</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {PROJECTS.map((PROJECT) => {
        return <Project key={PROJECT.id} project={PROJECT} />;
      })}
    </div>
  </div>
);

export default Projects;
