import React from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Start from "../pages/Start";
import ErrorPages from "../pages/ErrorPages";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="./pages/" exact component={Start} />
        <Route path="./pages/about" component={About} />
        <Route path="./pages/projects" component={Projects} />
        <Route path="./pages/contact" component={Contact} />
        <Route component={ErrorPages} />
      </Switch>
    </>
  );
};

export default Page;
