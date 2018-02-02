import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
import search from "./search";
import Profile from "./Profile";
import sitesearch from "./sitesearch";

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
  routing: routerReducer,
  search
  Profile,
  sitesearch,
});

export default Reducers;
