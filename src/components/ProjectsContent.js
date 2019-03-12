import React, { Component } from "react";
import Project from "../components/Project";

class ProjectsContent extends Component {
  state = {};
  render() {
    return (
      <div className="wrap-all-projects">
        <div className="wrap-projects">
          <Project />
        </div>
      </div>
    );
  }
}

export default ProjectsContent;
