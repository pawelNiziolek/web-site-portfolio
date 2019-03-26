import React from "react";
import "../styles/pop-up.css";
import "../styles/about-wrap.css";
import "../styles-media/about-media.css";
import PopUp from "../components/PopUp";
import AboutWrap from "../components/AboutWrap";

const About = () => {
  return (
    <>
      <AboutWrap />
      <PopUp />
    </>
  );
};

export default About;
