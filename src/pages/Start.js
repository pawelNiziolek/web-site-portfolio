import React from "react";
import PopUp from "../components/PopUp";
import StartHome from "../components/StartHome";

class Start extends React.Component {
  state = {
    now: false,
    future: false
  };

  handleShowNow = () => {
    this.setState({
      now: !this.state.now,
      future: false
    });
  };
  handleShowFuture = () => {
    this.setState({
      future: !this.state.future,
      now: false
    });
  };

  render() {
    const { now, future } = this.state;
    return (
      <>
        <StartHome
          now={now}
          future={future}
          showNow={this.handleShowNow}
          showFuture={this.handleShowFuture}
        />
        <PopUp />
      </>
    );
  }
}

export default Start;
