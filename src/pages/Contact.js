import React, { Component } from "react";
import ContactShadow from "../components/ContactShadow";
import PopUp from "../components/PopUp";
import "../styles/contact-shadow.css";
import "../styles-media/contact-media.css";

class Contact extends Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });

    this.xm = (this.state.x - Math.floor(window.innerWidth / 2)) * 0.4;

    this.ym = (this.state.y - Math.floor(window.innerHeight / 2)) * 0.4;

    this.d = Math.round(Math.sqrt(this.xm * this.xm + this.ym * this.ym) / 5);

    this.styleText = `${-this.xm}px ${-this.ym}px ${this.d + 10}px black`;

    this.styleBox = `${-this.xm}px ${-this.ym}px ${this.d + 30}px black`;

    this.style3d = `rotateY(${this.xm / 15}deg) rotateX(${this.ym / 10}deg)`;
  };

  render() {
    return (
      <>
        <ContactShadow
          mouseMove={this.handleMouseMove}
          styleBox={this.styleBox}
          styleText={this.styleText}
          style3d={this.style3d}
        />
        <PopUp />
      </>
    );
  }
}

export default Contact;
