import React from "react";
import Project from "../components/Project";

const ProjectsContent = props => {
  const projects = props.projects.map(project => (
    <Project project={project} key={project.id} rotate={props.rotate} />
  ));
  return (
    <div className="wrap-all-projects">
      <div className="wrap-projects">{projects}</div>
    </div>
  );
};

export default ProjectsContent;
