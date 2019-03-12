import React, { Component } from "react";
import PopUp from "../components/PopUp";
import ProjectsContent from "../components/ProjectsContent";
import "../styles/projects.css";

class Projects extends Component {
  render() {
    return (
      <>
        <ProjectsContent />
        <PopUp />
      </>
    );
  }
}

export default Projects;
