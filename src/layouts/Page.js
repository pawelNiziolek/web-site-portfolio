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
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Start} />
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route
          path={process.env.PUBLIC_URL + "/projects"}
          component={Projects}
        />
        <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
        <Route component={ErrorPages} />
      </Switch>
    </>
  );
};

export default Page;
