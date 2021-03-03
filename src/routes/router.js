import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/contact/Contact";
import Contact from "../pages/about/About";
import Home from "../pages/home/Home";
import Resume from "../pages/resume/Resume";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
