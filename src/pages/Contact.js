import React, { Component } from "react";
import "../styles/contact.css";

const Shadow = props => (
  <div className="shadow-box" onMouseMove={props.mouseMove}>
    <div className="s-box" style={{ boxShadow: props.styleBox }} />
    <p
      className="s-text"
      style={{
        textShadow: props.styleText
      }}
    >
      Skontaktuj się
    </p>
    <div className="s-wall">
      <p>email: </p>
      <span>pawel.r.niziolek@gmail.com</span>
      <p>gitHub: </p>
      <span>
        <a
          href="https://github.com/pawelNiziolek"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/pawelNiziolek
        </a>
      </span>
      <p>linkedIn: </p> <span>Lorem ipsum dolor sit amet.</span>
    </div>
    <div className="s-spot" style={{ backgroundPosition: props.styleSpot }} />
  </div>
);

class Contact extends Component {
  state = {
    x: 0,
    y: 0
  };

  xm = "";
  ym = "";
  d = "";
  styleText = "";
  styleBox = "";
  styleSpot = "";

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
    this.xm = (this.state.x - Math.floor(window.innerWidth / 2)) * 0.4;
    this.ym = (this.state.y - Math.floor(window.innerHeight / 3)) * 0.4;
    this.d = Math.round(Math.sqrt(this.xm * this.xm + this.ym * this.ym) / 5);
    this.styleText = `${-this.xm}px ${-this.ym}px ${this.d + 10}px black`;
    this.styleBox = `${-this.xm}px ${-this.ym}px ${this.d + 30}px black`;
    this.styleSpot = `${this.xm}px ${this.ym}px`;
  };

  render() {
    return (
      <>
        <Shadow
          mouseMove={this.handleMouseMove}
          styleBox={this.styleBox}
          styleText={this.styleText}
          styleSpot={this.styleSpot}
        />
      </>
    );
  }
}

export default Contact;
