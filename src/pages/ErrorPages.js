import React from "react";
import PopUp from "../components/PopUp";
import ErrorWrap from "../components/ErrorWrap";
import "../styles/error-wrap.css";
import "../styles-media/error-media.css";

const ErrorPages = () => {
  return (
    <>
      <ErrorWrap />
      <PopUp />
    </>
  );
};

export default ErrorPages;
