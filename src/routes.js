import React from "react";

//custom components and containers
import TestCompContainer from "./containers/TestCompContainer";
import About from "./components/About/About";
import UserForm from "./containers/UserForm"; //userform container
import ProjectContainer from "./containers/ProjectContainer";
import DashboardContainer from "./containers/DashboardContainer";
import SitesearchContainer from "./containers/SitesearchContainer";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing.js";
import ProfileContainer from "./containers/ProfileContainer";
import MyAnalyses from "./containers/MyAnalyses";
import Search from "./components/Search/Search";
import AnalysisContainer from "./containers/AnalysisContainer.js";
import AllAnalyses from "./containers/AllAnalyses";
import CollectionContainer from "./containers/CollectionContainer.js";
import AllCollections from "./containers/AllCollections";
import NewProfileContainer from "./containers/NewProfileContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = ({ history }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/sitesearch" component={SitesearchContainer} />
        <Route exact path="/project" component={ProjectContainer} />
        <Route exact path="/login" component={UserForm} />
        <Route exact path="/newprofile" component={NewProfileContainer} />
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/profile/:user_id?" component={ProfileContainer} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/myanalyses/:user_id?" component={MyAnalyses} />
        {/* ANALYSIS ROUTES */}
        <Route exact path="/analyses" component={AllAnalyses} />
        <Route
          exact
          path="/analysis/:anaysis_id?"
          component={AnalysisContainer}
        />
        {/* COLLECTION ROUTES */}
        <Route exact path="/collections" component={AllCollections} />
        <Route
          exact
          path="/collections/:collection_id?"
          component={CollectionContainer}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
