import React from "react";

const ProjectButtons = props => {
  return (
    <div className="buttons">
      <a href={props.titleLive} target="_blank" rel="noopener noreferrer">
        <button>live </button>
      </a>
      <a href={props.titleGit} target="_blank" rel="noopener noreferrer">
        <button>GitHub</button>
      </a>
    </div>
  );
};

export default ProjectButtons;
