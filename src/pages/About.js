import React, { Component } from "react";
import "../styles/pop-up.css";
import "../styles/about-wrap.css";
import "../styles-media/about-media.css";
import PopUp from "../components/PopUp";
import AboutWrap from "../components/AboutWrap";

class About extends Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });

    this.xm = (this.state.x - Math.floor(window.innerWidth) / 2) * 0.05;

    this.ym = (this.state.y - Math.floor(window.innerHeight) / 2) * 0.3;

    this.styleAboutText = `rotateY(${this.xm / 60}deg) rotateX(${this.ym /
      100}deg) translateY(0) translateX(50%)`;
  };

  render() {
    return (
      <>
        <AboutWrap
          mouseMove={this.handleMouseMove}
          styleAbT={this.styleAboutText}
        />
        <PopUp />
      </>
    );
  }
}
export default About;
