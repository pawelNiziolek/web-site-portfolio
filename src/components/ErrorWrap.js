import React from "react";
import animal from "../images/surykatki.mp4";

const ErrorWrap = () => {
  return (
    <div className="error">
      <video autoPlay={true} loop={true}>
        <source src={animal} type="video/mp4" />
      </video>
      <p>
        <span className="one">Chłopaki?</span>
        <span className="two">CHŁOPAKI!</span>
        <br />
        <span className="three">nic tu nie ma !</span>
      </p>
    </div>
  );
};

export default ErrorWrap;
