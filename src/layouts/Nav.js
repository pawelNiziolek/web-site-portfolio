import React, { Component } from "react";
import "../styles/nav-wrap.css";
import "../styles/nav-home-hamburger.css";
import "../styles/nav-menu-hamburger.css";
import "../styles-media/nav-menu-hamburger-media.css";
import "../styles-media/nav-media.css";
import NavWrap from "../components/NavWrap";
import NavWrapMedia from "../components/NavWrapMedia";

class Nav extends Component {
  state = {
    hamburgerActive: false
    // hideMenu: false
  };

  handleToggleHamburger = () => {
    this.setState({
      hamburgerActive: !this.state.hamburgerActive
    });
  };

  // handleHideMenu = () => {
  //   this.setState({ hideMenu: window.innerWidth < 768 });
  // };

  // componentDidMount() {
  //   window.addEventListener("resize", this.handleHideMenu);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.handleHideMenu);
  // }

  render() {
    const { hamburgerActive /*hideMenu*/ } = this.state;
    return (
      <>
        <NavWrapMedia
          hamburgerActive={hamburgerActive}
          toogleHam={this.handleToggleHamburger}
        />
        <NavWrap />
      </>
    );
  }
}

export default Nav;
