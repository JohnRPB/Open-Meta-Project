import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import AnalysisEditPage from "./AnalysisEditPage";
import MyAnalysesPage from "./MyAnalyses";
import DashboardPage from "./DashboardPage";
import ProfilePage from "./ProfilePage";
import SiteSearchPage from "./SiteSearchPage";
import AnalysisDisplayPage from "./AnalysisDisplayPage";
// import collections from "./collections";
import CollectionEditPage from "./CollectionEditPage";
import routeProps from "./routeProps";
import modules from "./modules";
import session from "./session";
import CollectionDisplayPage from "./CollectionDisplayPage.js";
import SelectCollectionPage from "./SelectCollectionPage.js";

const Reducers = combineReducers({
  MyAnalysesPage,
  AnalysisEditPage,
  CollectionEditPage,
  SelectCollectionPage,
  ProfilePage,
  SiteSearchPage,
  DashboardPage,
  AnalysisDisplayPage,
  CollectionDisplayPage,
  // collections,
  routeProps,
  session,
  routing: routerReducer,
  modules
});

export default Reducers;
