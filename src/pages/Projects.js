import React from "react";
import PopUp from "../components/PopUp";
import "../styles/projects.css";

const Projects = () => {
  return (
    <>
      <div className="wrap-all-projects">
        <div className="wrap-projects">
          <div className="project one"> </div>
          <div className="project two"> </div>
          <div className="project three"> </div>
          <div className="project four"> </div>
          <div className="project five"> </div>
          <div className="project six"> </div>
        </div>
      </div>
      <PopUp />
    </>
  );
};

export default Projects;
