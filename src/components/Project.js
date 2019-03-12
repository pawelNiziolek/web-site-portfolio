import React, { Component } from "react";
import ProjectButtons from "../components/ProjectButtons";

class Project extends Component {
  state = {
    rotate: false,

    lists: [
      { id: 1, title: "one", text: "Beauty Story..." },
      { id: 2, title: "two", text: "Superhero memory..." },
      { id: 3, title: "three", text: "Weather App..." },
      { id: 4, title: "four", text: "Slot machine..." },
      { id: 5, title: "five", text: "Lista zadań..." },
      { id: 6, title: "six", text: "Stacja paliw..." }
    ]
  };

  handleRotate = () => {
    this.setState({
      rotate: !this.state.rotate
    });
  };

  render() {
    const nameClass = this.state.lists.map(list => {
      return (
        <div
          key={list.id}
          className={this.state.rotate ? `project rotate` : `project `}
          onClick={this.handleRotate}
        >
          <div className="project-content">
            <div
              className={
                this.state.rotate
                  ? `front ${list.title} rotate`
                  : `front ${list.title}`
              }
            />
            <div className={`back ${list.title}`}>
              <p>{list.text}</p>
              <ProjectButtons />
            </div>
          </div>
        </div>
      );
    });
    return <>{nameClass}</>;
  }
}

export default Project;
