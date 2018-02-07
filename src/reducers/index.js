import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
import Token from "./Token";
import Profile from "./Profile";
import sitesearch from "./sitesearch";
import Analysis from "./Analysis";
import collections from "./collections";
import collectionEdit from "./collectionEdit";
import routeProps from "./routeProps";
import modules from "./modules";
import Collection from "./Collection.js";

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
  Token,
  routing: routerReducer,
  collections,
  collectionEdit,
  routeProps,
  Profile,
  sitesearch,
  Analysis,
  Collection,
  routing: routerReducer,
  modules
});

export default Reducers;
