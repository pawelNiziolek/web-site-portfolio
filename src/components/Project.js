import React from "react";
import ProjectButtons from "../components/ProjectButtons";

const Project = props => {
  const { title, active, id, text, titleLive, titleGit } = props.project;
  return (
    <div key={id} className="project" onClick={() => props.rotate(id)}>
      <div className={active ? `project-content rotate` : `project-content `}>
        <div className={active ? `front ${title} rotate` : `front ${title}`} />
        <div className={`back ${title}`}>
          <p>{text}</p>
          <ProjectButtons titleGit={titleGit} titleLive={titleLive} />
        </div>
      </div>
    </div>
  );
};

export default Project;
