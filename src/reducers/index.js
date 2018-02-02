import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
import Token from "./Token"

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
  Token
  routing: routerReducer
});

export default Reducers;
