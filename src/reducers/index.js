import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
import Token from "./Token"
import Profile from "./Profile";
import sitesearch from "./sitesearch";

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
  Token,
  Profile,
  sitesearch,
  routing: routerReducer
});

export default Reducers;
