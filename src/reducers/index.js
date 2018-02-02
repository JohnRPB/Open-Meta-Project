import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
<<<<<<< HEAD
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
<<<<<<< HEAD
=======
import search from "./search";
>>>>>>> feature-search
=======
import Profile from "./Profile";
import sitesearch from "./sitesearch";

>>>>>>> master

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
<<<<<<< HEAD
  routing: routerReducer,
  search
=======
  Profile,
  sitesearch,
  routing: routerReducer
>>>>>>> master
});

export default Reducers;
