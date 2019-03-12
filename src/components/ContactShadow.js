import React from "react";
import "../styles/contact-shadow.css";

const ContactShadow = props => (
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

export default ContactShadow;
