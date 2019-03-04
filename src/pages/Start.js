import React from "react";
import "../styles/start.css";

const Home = () => (
  <div className="wrap-start">
    <div className="chose-tech">
      <div className="use">
        <p>
          Technologie których używam
          <button className="now" />
        </p>
        <p>
          Technologie które chcę poznać
          <button className="future" />
        </p>
      </div>
    </div>
    <div className="container">
      <div className="wrap-tech">
        <div className="circle">
          <div className="tech node"> </div>
          <div className="tech mongo"> </div>
          <div className="tech css"> </div>
          <div className="tech sass"> </div>
          <div className="tech html"> </div>
          <div className="tech git"> </div>
          <div className="tech gimp"> </div>
          <div className="tech react"> </div>
          <div className="tech js"> </div>
        </div>
      </div>
    </div>
  </div>
);

class Start extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

export default Start;
