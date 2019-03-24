import React, { Component } from "react";
import "../styles/nav-wrap.css";
import "../styles/nav-media.css";
import "../styles/nav-media-home.css";
// import NavWrap from "../components/NavWrap";
import NavMedia from "../components/NavMedia";

class Nav extends Component {
  state = {
    hamburgerActive: false
  };

  handleToggleHamburger = () => {
    this.setState({
      hamburgerActive: !this.state.hamburgerActive
    });
  };

  render() {
    const { hamburgerActive } = this.state;
    return (
      <>
        <NavMedia
          hamburgerActive={hamburgerActive}
          showHideHam={this.handleToggleHamburger}
        />
        {/* <NavWrap /> */}
      </>
    );
  }
}

export default Nav;
