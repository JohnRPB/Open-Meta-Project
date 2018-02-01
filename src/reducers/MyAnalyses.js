import { combineReducers } from "redux";
import * as Actions from "../actions/MyAnalyses";

export function analyses(state = [], action) {
  switch (action.type) {
    case Actions.GET_ANALYSES_SUCCESS:
      return {
        ...state,
        analyses: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export const openMeta = combineReducers({
  analyses
});
