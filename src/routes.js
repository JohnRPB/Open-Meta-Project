import React from "react";

//custom components and containers
import TestCompContainer from "./containers/TestCompContainer";
import About from "./components/About/About";
import UserForm from "./components/Login/UserForm";
import ProjectContainer from "./containers/ProjectContainer";
import DashboardContainer from "./containers/DashboardContainer";
import Landing from "./components/Landing/Landing.js";
import ProfileContainer from "./containers/ProfileContainer";
import MyAnalyses from "./containers/MyAnalyses";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={TestCompContainer} />
        <Route exact path="/project" component={ProjectContainer} />
        <Route exact path="/login" component={UserForm} />
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route exact path="/myanalyses" component={MyAnalyses} />
      </div>
    </Router>
  );
};

export default Routes;
