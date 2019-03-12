import React from "react";
import "../styles/project-buttons.css";

const ProjectButtons = props => {
  return (
    <div className="buttons">
      <button onClick={props.BtnLive}>live</button>
      <button onClick={props.BtnGitHub}>gitHub</button>
    </div>
  );
};

export default ProjectButtons;
