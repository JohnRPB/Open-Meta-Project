import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";

const Reducers = combineReducers({
  demo,
  project,
  routing: routerReducer
});

export default Reducers;
