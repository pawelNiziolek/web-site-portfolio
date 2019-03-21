import React, { Component } from "react";

class AboutWrap extends Component {
  state = {};
  render() {
    return (
      <div className="wrap-all-about">
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            possimus porro fuga veritatis officiis, nisi, velit aspernatur
            voluptatem corrupti minus corporis inventore. Quibusdam quidem omnis
            architecto consequuntur excepturi quisquam officia?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            ullam in deleniti ex et ipsam cupiditate nam eveniet nemo rerum cum
            repudiandae iusto, rem quis adipisci aperiam perferendis ipsum
            nesciunt.
          </p>
          <p>
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloribus nihil odit vitae pariatur blanditiis? Porro autem
            necessitatibus eligendi cumque architecto nemo nobis voluptatibus
            perspiciatis a, ipsam est vitae incidunt dolores?
          </p>
        </div>
        <div className="wrap-all-side">
          <div className="about-left"> </div>
          <div className="about-right"> </div>
        </div>
      </div>
    );
  }
}

export default AboutWrap;
