import React, { Component } from "react";
import Nav from "../layouts/Nav";
import Page from "../layouts/Page";
import Footer from "../layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrap-all">
          <header className="wrap-menu">{<Nav />}</header>
          <main>{<Page />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
