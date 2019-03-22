import React, { Component } from "react";

class AboutWrap extends Component {
  state = {
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tempora quas tenetur in voluptatibus, assumenda incidunt quod blanditiis explicabo quibusdam fugiat quae doloremque itaque iusto autem. Deserunt voluptatum accusamus ratione provident quas magnam cum. Quidem, accusantium fuga numquam sed expedita inventore dignissimos aliquid possimus culpa quibusdam? Quia illo animi ipsa ea modi fugit dolor quasi, nulla iure cum natus laboriosam nostrum ab distinctio sed eaque totam ad tempora! Obcaecati fugiat, accusamus architecto eligendi ab earum! Mollitia, repellendus ratione! Quia repellat nemo at quas accusantium sapiente eum, totam assumenda autem voluptas, voluptatibus, quam temporibus quidem aut doloremque! Sit adipisci nulla qui."
  };

  render() {
    const { text } = this.state;
    return (
      <div className="wrap-all-about">
        <div className="wrap-all-side">
          <div className="about-text">
            <p>{text}</p>
          </div>
          <div className="about-left" />
          <div className="about-right" />
        </div>
      </div>
    );
  }
}

export default AboutWrap;
