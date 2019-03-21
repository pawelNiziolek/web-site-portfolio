import React from "react";
import StartButton from "../components/StartButton";
import "../styles/start-home.css";

const StartHome = props => {
  const { now, future, showFuture, showNow, mouseMove, style3dShow } = props;
  return (
    <>
      <div className="wrap-start" onMouseMove={mouseMove}>
        <div
          style={
            now || future ? { transform: style3dShow } : { transform: "none" }
          }
          className={
            now && future
              ? "container active-now"
              : future
              ? "container active-future"
              : "container"
          }
        >
          <div
            className={
              now
                ? "wrap-tech active-now"
                : future
                ? "wrap-tech active-future"
                : "wrap-tech "
            }
          >
            <div
              className={
                now
                  ? "circle active-now"
                  : future
                  ? "circle active-future"
                  : "circle "
              }
            >
              <div
                className={
                  now
                    ? "tech js active-now"
                    : future
                    ? "tech js active-future"
                    : "tech js"
                }
              />
              <div
                className={
                  now
                    ? "tech react active-now"
                    : future
                    ? "tech react active-future"
                    : "tech react"
                }
              />
              <div
                className={
                  now
                    ? "tech css active-now"
                    : future
                    ? "tech css active-future"
                    : "tech css"
                }
              />
              <div
                className={
                  now
                    ? "tech sass active-now"
                    : future
                    ? "tech sass active-future"
                    : "tech sass"
                }
              />
              <div
                className={
                  now
                    ? "tech html active-now"
                    : future
                    ? "tech html active-future"
                    : "tech html"
                }
              />
              <div
                className={
                  now
                    ? "tech git active-now"
                    : future
                    ? "tech git active-future"
                    : "tech git"
                }
              />
              <div
                className={
                  now
                    ? "tech gimp active-now"
                    : future
                    ? "tech gimp active-future"
                    : "tech gimp"
                }
              />
              <div
                className={
                  now
                    ? "tech node active-now"
                    : future
                    ? "tech node active-future"
                    : "tech node"
                }
              />
              <div
                className={
                  now
                    ? "tech mongo active-now"
                    : future
                    ? "tech mongo active-future"
                    : "tech mongo"
                }
              />
            </div>
          </div>
        </div>
        <StartButton
          now={now}
          future={future}
          showNow={showNow}
          showFuture={showFuture}
          style3dBtn={props.style3dBtn}
        />
      </div>
    </>
  );
};

export default StartHome;
