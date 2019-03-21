import React from "react";
import "../styles/start-button.css";

const StartButton = props => {
  const { now, future, showFuture, showNow, style3dBtn } = props;
  return (
    <div className="chose-tech">
      <button
        style={{ transform: style3dBtn }}
        className="now"
        onClick={showNow}
      >
        {now ? "Pokaż wszystkie" : "Technologie których używam"}
      </button>
      <button
        style={{ transform: style3dBtn }}
        className="future"
        onClick={showFuture}
      >
        {future ? (
          "Pokaż wszystkie"
        ) : (
          <p>
            Technologie które chcę poznać <br />
            <span> (w najbliższym czasie)</span>
          </p>
        )}
      </button>
    </div>
  );
};

export default StartButton;
