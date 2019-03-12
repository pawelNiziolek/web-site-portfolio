import React, { Component } from "react";
import PopUp from "../components/PopUp";
import ProjectsContent from "../components/ProjectsContent";
import "../styles/project.css";
import "../styles/project-buttons.css";
import "../styles/projects-content.css";

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "one",
        text: "Beauty Story...",
        titleLive: "https://pawelniziolek.github.io/First-website/index.html",
        titleGit: "https://github.com/pawelNiziolek/First-website",
        active: false
      },
      {
        id: 2,
        title: "two",
        text: "Superhero memory...",
        titleLive: "https://pawelniziolek.github.io/Superhero-memory-game/",
        titleGit: "https://github.com/pawelNiziolek/Superhero-memory-game",
        active: false
      },
      {
        id: 3,
        title: "three",
        text: "Weather App...",
        titleLive: "https://pawelniziolek.github.io/Weather-app-in-React/",
        titleGit: "https://github.com/pawelNiziolek/Weather-app-in-React",
        active: false
      },
      {
        id: 4,
        title: "four",
        text: "Slot machine...",
        titleLive: "https://pawelniziolek.github.io/slot-machine/",
        titleGit: "https://github.com/pawelNiziolek/slot-machine",
        active: false
      },
      {
        id: 5,
        title: "five",
        text: "Lista zadań...",
        titleLive:
          "https://pawelniziolek.github.io/another-to-do-list-in-JS/index.html",
        titleGit: "https://github.com/pawelNiziolek/another-to-do-list-in-JS",
        active: false
      },
      {
        id: 6,
        title: "six",
        text: "Stacja paliw...",
        titleLive: "https://pawelniziolek.github.io/International-gas-station/",
        titleGit: "https://github.com/pawelNiziolek/International-gas-station",
        active: false
      }
    ]
  };

  handleRotate = id => {
    const projects = this.state.projects.map(project => {
      if (project.id === id) {
        project.active = !project.active;
      }
      return project;
    });
    this.setState({
      projects
    });
  };
  render() {
    return (
      <>
        <ProjectsContent
          projects={this.state.projects}
          rotate={this.handleRotate}
        />
        <PopUp />
      </>
    );
  }
}

export default Projects;
