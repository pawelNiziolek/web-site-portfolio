import React from "react";
import "../styles/pop-up.css";

const ShowPopUp = () => {
  return (
    <div className="pop-up">
      <div className="black-top" />
      <div className="middle" />
      <div className="black-bottom" />
    </div>
  );
};

class PopUp extends React.Component {
  state = {
    visible: true
  };

  componentDidMount() {
    this.timeOut = setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const { visible } = this.state;
    return <>{visible ? <ShowPopUp /> : null}</>;
  }
}

export default PopUp;
