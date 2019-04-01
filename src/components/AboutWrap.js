import React, { Component } from "react";
import { Link } from "react-router-dom";

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

const textZero = "Cześć! Nazywam się Paweł Niziołek";

const textOne =
  " i długo szukałem pomysłu na siebie, czegoś co pozwoli mi się rozwijać i da satysfakcję a nie będzie jedynie wykonywaniem obowiązków.";

const textTwo =
  'Studia które skończyłem to Zarządzanie i Inżynieria produkcji oraz Towaroznawstwo na Uniwersytecie Ekonomicznym w Krakowie, w między czasie pracowałem w gastronomii jako barman, co nauczyło mnie "niesamowitej" cierpliwości w kontaktach z klientami i pracy zespołowej.';

const textThree = `Studia nie do końca spełniły moje oczekiwania i wiedziałem, że muszę coś zmienić, dlatego już w czasie ich trwania zrobiłem kurs zarządzania projektami i zacząłem się bardziej przyglądać branży IT i możliwościom jakie daje.`;

const textFour =
  "Zawsze byłem osobą kreatywną i konsekwentną, więc w  drugiej połowie 2018 roku zaczerpnąłem informacji od znajomych, którzy już pracowali jako programiści i wybrałem Front-end jako cel mojej nauki. Stworzyłem plan działania, zgromadziełm potrzebne materiały i zacząłem od podstaw( html -> css -> JavaScript -> React). Postanowiłem się temu całkowicie poświęcić i okazało się to strzałem w dziesiątkę. Od tego czasu, niemalże codziennie samodzielnie pogłębiam swoją wiedzę o programowaniu.";

const textFive =
  "Teraz gdy zajmuję się nowym projektem, uczę się nowej technologii albo szukam rozwiązania problemu, zdarza sie, że dzień bywa zbyt krótki :) Podziwiam oryginalny design stron internetowych i aplikacji  oraz ich twórców i szukam pracy w zespole, który pomoże mi rozwijać już nabyte umiejętności i nauczy wielu nowych.";

const textSix =
  "Co oprócz programowania? Jestem i w sumie zawsze byłem uzależniony od aktywności fizycznej a od 2 lat kalistenika jest moim faworytem i pomaga oczyścić umysł przed dalszym działaniem. Lubię również nowinki technologiczne i jak widać po prawej stronie jestem fanem komiksów ";

class AboutWrap extends Component {
  state = {
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
    }, 2850);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { imagesLeft, imagesRight, index, hide } = this.state;

    const { mouseMove, styleAbT } = this.props;

    const imgLeft = `url(${imagesLeft[index].img})`;
    const imgRight = `url(${imagesRight[index].img})`;

    return (
      <>
        <div className="wrap-all-about" onMouseMove={mouseMove}>
          <div className="wrap-all-side">
            <div className="about-text" style={{ transform: styleAbT }}>
              <p className="text-zero">{textZero}</p>
              <p className="text-one">{textOne}</p>
              <br />
              <p className="text-two">{textTwo}</p>
              <p className="text-three">{textThree}</p>
              <p className="text-four">{textFour}</p>
              <p className="text-five">{textFive}</p>
              <p className="text-six">
                {textSix}
                <img
                  src="https://img.icons8.com/ios/30/000000/batman-old.png"
                  alt="Batman icon by Icons8"
                />
              </p>
              <p className="text-seven">
                <Link to="/contact"> Zapraszam do kontaktu</Link>
              </p>
            </div>
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
        {hide ? <div className="wrap-all-hide" /> : null}
      </>
    );
  }
}

export default AboutWrap;
