import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// ---------------------------------------------------------
// Site pages 
// 2018-02-27 20:11
// ---------------------------------------------------------

// Authentication
import LogCheckContainer from './containers/LogCheck/LogCheckContainer.js';
import UserFormContainer from './containers/Login/UserFormContainer'; //userform container
// Registration
import NewProfileContainer from './containers/Pages/Profile/NewProfileContainer';
// Informational pages
import About from './components/Pages/About/About';
import Landing from './components/Pages/Landing/Landing.js';
// Personal
import DashboardContainer from './containers/Pages/DashboardContainer';
import ProfilePageContainer from './containers/Pages/Profile/ProfilePageContainer';
// Main Page
import MyAnalyses from './containers/Pages/MyAnalyses/MyAnalyses';
// Editors
import AnalysisEditContainer from './containers/Pages/AnalysisEditContainer';
import CollectionEditContainer from './containers/Pages/CollectionEdit/CollectionEditContainer';
// Select collection diversion page
import SelectCollectionPageContainer from './containers/Pages/SelectCollection/SelectCollectionPageContainer';
// Single resource display pages 
import AnalysisDisplayContainer from './containers/Pages/AnalysisDisplayContainer.js';
import CollectionDisplayContainer from './containers/Pages/CollectionDisplayContainer.js';
// Multi-resource display pages
import AllAnalyses from './containers/Pages/MyAnalyses/AllAnalyses';
import AllCollections from './containers/Pages/MyAnalyses/AllCollections';
// Search
import SitesearchContainer from './containers/Pages/SitesearchContainer';
import CollectionSearch from './components/Pages/Collections/CollectionSearch';

// -------------------------
// Routes
// -------------------------


const Routes = (props) => {
  // console.log('Route Props: ', props);
  let display = (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/" component={UserFormContainer} />
      </Switch>
    </Router>
  );
  if (props.token) {
    display = (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/sitesearch" component={SitesearchContainer} />
          <Route exact path="/login" component={UserFormContainer} />
          <Route exact path="/newprofile" component={NewProfileContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/profile/:user_id?" component={ProfilePageContainer} />
          //<Route exact path="/myanalyses/:user_id?" component={MyAnalyses} />
          {/* ANALYSIS ROUTES */}
          <Route exact path="/analyses" component={AllAnalyses} />
          <Route
            exact
            path="/selectcollection"
            component={SelectCollectionPageContainer}
          />
          <Route
            exact
            path="/analysis/:anaysis_id"
            component={AnalysisDisplayContainer}
          />
          <Route
            exact
            path="/analysis/:analysis_id/edit"
            component={AnalysisEditContainer}
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
              <LogCheckContainer
                {...props}
                Target={CollectionEditContainer}
              />
            )}
          />
          <Route
            exact
            path="/collections/:collection_id"
            component={CollectionDisplayContainer}
          />
        </Switch>
      </Router>
    );
  }
  return display;
};

export default Routes;
