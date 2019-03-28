import React, { Component } from "react";
import Project from "../components/Project";

class ProjectsContent extends Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
    this.xm = (this.state.x - Math.floor(window.innerWidth / 2)) * 0.2;
    this.ym = (this.state.y - Math.floor(window.innerHeight / 2)) * 0.3;
    this.style3d = `rotateY(${this.xm / 50}deg) rotateX(${this.ym / 40}deg)`;
  };

  render() {
    const projects = this.props.projects.map(project => (
      <Project project={project} key={project.id} rotate={this.props.rotate} />
    ));
    return (
      <div className="wrap-all-projects" onMouseMove={this.handleMouseMove}>
        <div className="wrap-projects" style={{ transform: this.style3d }}>
          {projects}
        </div>
      </div>
    );
  }
}

export default ProjectsContent;
