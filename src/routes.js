import React from "react";

//custom components and containers
import TestCompContainer from "./containers/TestCompContainer";
import About from "./components/About/About";
import UserForm from "./components/Login/UserForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={UserForm} />
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/landing" component={Landing} />
      </div>
    </Router>
  );
};

export default Routes;
