import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import demo from "./demo";
import project from "./project";
import MyAnalysesPage from "./MyAnalyses";
import Dashboard from "./Dashboard";
<<<<<<< HEAD
import Token from "./Token"
=======
import Profile from "./Profile";
import sitesearch from "./sitesearch";

>>>>>>> 3c82c34345c28b4bf576d45672009e30e4e0b8fc

const Reducers = combineReducers({
  demo,
  project,
  MyAnalysesPage,
  Dashboard,
<<<<<<< HEAD
  Token,
=======
  Profile,
  sitesearch,
>>>>>>> 3c82c34345c28b4bf576d45672009e30e4e0b8fc
  routing: routerReducer
});

export default Reducers;
