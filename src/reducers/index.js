import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import search from "./search";

const Reducers = combineReducers({
  demo,
  project,
  routing: routerReducer,
  search
});

export default Reducers;
