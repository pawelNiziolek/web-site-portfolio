import React from "react";
import PopUp from "../components/PopUp";
import StartHome from "../components/StartHome";

class Start extends React.Component {
  state = {
    now: false,
    future: false,
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
    this.xm = (this.state.x - Math.floor(window.innerWidth / 2)) * 0.02;
    this.ym = (this.state.y - Math.floor(window.innerHeight / 3)) * 0.03;
    this.style3d = `rotateY(${this.xm / 1000}deg) rotateX(${-this.ym}deg)`;
    this.style3dShow = `rotateY(${this.xm}deg) rotateX(${this.ym}deg)`;
    this.style3dBtn = `rotateY(${this.xm}deg) rotateX(${this.ym * 1.5}deg)`;
  };

  handleShowNow = () => {
    this.setState({
      now: !this.state.now,
      future: false
    });
  };
  handleShowFuture = () => {
    this.setState({
      future: !this.state.future,
      now: false
    });
  };

  render() {
    const { now, future } = this.state;
    return (
      <>
        <StartHome
          now={now}
          future={future}
          showNow={this.handleShowNow}
          showFuture={this.handleShowFuture}
          mouseMove={this.handleMouseMove}
          style3d={this.style3d}
          style3dBtn={this.style3dBtn}
          style3dShow={this.style3dShow}
        />
        <PopUp />
      </>
    );
  }
}

export default Start;
