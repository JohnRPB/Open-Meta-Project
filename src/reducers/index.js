import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import sitesearch from "./sitesearch";
import Analysis from "./Analysis";

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
  Profile,
  sitesearch,
  Analysis,
  routing: routerReducer
});

export default Reducers;
