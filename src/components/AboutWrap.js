import React, { Component } from "react";
import left from "../images/about-left.png";
import left1 from "../images/about-left1.png";
import left2 from "../images/about-left2.png";
import left3 from "../images/about-left3.png";
import left4 from "../images/about-left4.png";
import right from "../images/about-right.png";
import right1 from "../images/about-right1.png";
import right2 from "../images/about-right2.png";
import right3 from "../images/about-right3.png";
import right4 from "../images/about-right4.png";

class AboutWrap extends Component {
  state = {
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tempora quas tenetur in voluptatibus, assumenda incidunt quod blanditiis explicabo quibusdam fugiat quae doloremque itaque iusto autem. Deserunt voluptatum accusamus ratione provident quas magnam cum. Quidem, accusantium fuga numquam sed expedita inventore dignissimos aliquid possimus culpa quibusdam? Quia illo animi ipsa ea modi fugit dolor quasi, nulla iure cum natus laboriosam nostrum ab distinctio sed eaque totam ad tempora! Obcaecati fugiat, accusamus architecto eligendi ab earum! Mollitia, repellendus ratione! Quia repellat nemo at quas accusantium sapiente eum, totam assumenda autem voluptas, voluptatibus, quam temporibus quidem aut doloremque! Sit adipisci nulla qui.",

    imagesLeft: [
      { img: left },
      { img: left1 },
      { img: left2 },
      { img: left3 },
      { img: left4 }
    ],

    imagesRight: [
      { img: right },
      { img: right1 },
      { img: right2 },
      { img: right3 },
      { img: right4 }
    ],
    index: 0,

    hide: true
  };

  handleChangeImages = () => {
    let id = this.state.index;
    id++;
    if (id >= this.state.imagesLeft.length) {
      id = 0;
    }
    this.setState({
      index: id
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.interval = setInterval(this.handleChangeImages, 4000);
    }, 4000);
    setTimeout(() => {
      this.setState({
        hide: false
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { text, imagesLeft, imagesRight, index, hide } = this.state;
    const imgLeft = `url(${imagesLeft[index].img})`;
    const imgRight = `url(${imagesRight[index].img})`;

    return (
      <>
        <div className="wrap-all-about" onMouseMove={this.props.mouseMove}>
          <div className="wrap-all-side">
            <div
              className="about-text"
              style={{ transform: this.props.styleAbT }}
            >
              <p>{text}</p>
            </div>
            <div className="under-left" />
            <div
              className="about-left"
              style={{
                backgroundImage: imgLeft
              }}
            />
            <div className="under-right" />
            <div
              className="about-right"
              style={{
                backgroundImage: imgRight
              }}
            />
          </div>
        </div>
        {hide ? <div className="wrap-all-hide" /> : null}
      </>
    );
  }
}

export default AboutWrap;
