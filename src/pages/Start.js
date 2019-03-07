import React from "react";
import "../styles/start.css";

const Home = props => {
  const { now, future, showFuture, showNow } = props;
  return (
    <div className="wrap-start">
      <div
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
            {/* {now ? "" : future ? "" : "?"} */}
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
      <div className="chose-tech">
        <button className="now" onClick={showNow}>
          {now ? "Pokaż wszystkie" : "Technologie których używam"}
        </button>
        <button className="future" onClick={showFuture}>
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
    </div>
  );
};

class Start extends React.Component {
  state = {
    now: false,
    future: false
  };

  handleShowNow = () => {
    console.log("klik");
    this.setState({
      now: !this.state.now,
      future: false
    });
  };
  handleShowFuture = () => {
    console.log("klik2");
    this.setState({
      future: !this.state.future,
      now: false
    });
  };

  render() {
    const { now, future } = this.state;
    return (
      <>
        <Home
          showNow={this.handleShowNow}
          showFuture={this.handleShowFuture}
          now={now}
          future={future}
        />
      </>
    );
  }
}

export default Start;
