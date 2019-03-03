import React from "react";
import "../styles/contact.css";
// import { BrowserRouter as Router, Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="wrap-contact">
        <h1>Skontaktuj się ze mną</h1>
        <p>
          email:
          <span>pawel.r.niziolek@gmail.com</span>
        </p>
        <p>
          gitHub:
          <span>
            <a href="https://github.com/pawelNiziolek" target="_blank">
              https://github.com/pawelNiziolek
            </a>
          </span>
        </p>
        <p>
          linkedIn: <span>Lorem ipsum dolor sit amet.</span>
        </p>
      </div>
    </>
  );
};

export default Contact;
