import React, { Component } from "react";
import Nav from "../layouts/Nav";
import Page from "../layouts/Page";
import Footer from "../layouts/Footer";
// import { BrowserRouter as Router } from "react-router-dom";
import { createHistory, LocationProvider, Router } from "@reach/router";
import createHashSource from "hash-source";
import "../styles/App.css";

let source = createHashSource();
let history = createHistory(source);

class App extends Component {
  render() {
    return (
      <LocationProvider history={history}>
        <Router>
          <div className="wrap-all">
            <header>{<Nav />}</header>
            <main>{<Page />}</main>
            <footer>{<Footer />}</footer>
          </div>
        </Router>
      </LocationProvider>
    );
  }
}

export default App;
