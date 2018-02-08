import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// -------------------------
// Containers
// -------------------------
import TestCompContainer from "./containers/TestCompContainer";
import ProjectContainer from "./containers/ProjectContainer";
import DashboardContainer from "./containers/DashboardContainer";
import SitesearchContainer from "./containers/SitesearchContainer";
import ProfileContainer from "./containers/ProfileContainer";
import MyAnalyses from "./containers/MyAnalyses";
import CollectionEditorContainer from "./containers/CollectionEditor/CollectionEditorContainer";
import LogCheckContainer from "./containers/LogCheck/LogCheckContainer.js";
import AnalysisContainer from "./containers/AnalysisContainer.js";
import AllAnalyses from "./containers/AllAnalyses";
import CollectionContainer from "./containers/CollectionContainer.js";
import AllCollections from "./containers/AllCollections";
import NewProfileContainer from "./containers/NewProfileContainer";

// -------------------------
// Components
// -------------------------
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing.js";
import CollectionSearch from "./components/Collections/CollectionSearch";
import SelectCollection from "./components/SelectCollection";
import About from "./components/About/About";
import UserForm from "./containers/UserForm"; //userform container

// -------------------------
// Routes
// -------------------------

const Routes = ({ history }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/sitesearch" component={SitesearchContainer} />
        <Route exact path="/login" component={UserForm} />
        <Route exact path="/newprofile" component={NewProfileContainer} />
        <Route exact path="/test" component={TestCompContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/profile/:user_id?" component={ProfileContainer} />
        <Route exact path="/myanalyses/:user_id?" component={MyAnalyses} />
        {/* ANALYSIS ROUTES */}
        <Route exact path="/analyses" component={AllAnalyses} />
        <Route exact path="/selectcollection" component={SelectCollection} />
        <Route
          exact
          path="/analysis/:anaysis_id"
          component={AnalysisContainer}
        />
        <Route
          exact
          path="/analysis/:analysis_id/edit"
          component={ProjectContainer}
        />
        {/* COLLECTION ROUTES */}
        <Route exact path="/collections" component={AllCollections} />
        <Route
          exact
          path="/collections/new"
          render={() => <LogCheckContainer Target={CollectionSearch} />}
        />
        <Route
          exact
          path="/collections/:id/edit"
          render={props => (
            <LogCheckContainer {...props} Target={CollectionEditorContainer} />
          )}
        />
        <Route
          exact
          path="/collections/:collection_id"
          component={CollectionContainer}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
