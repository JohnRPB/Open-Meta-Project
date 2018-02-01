import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  routing: routerReducer
});

export default Reducers;
