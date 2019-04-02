import React, { Component } from "react";
import Nav from "./Nav";
import Page from "./Page";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrap-all">
          <header>{<Nav />}</header>
          <main>{<Page />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
