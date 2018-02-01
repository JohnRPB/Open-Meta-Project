import * as Actions from "../actions/Dashboard";

export function DashboardPage(state = [], action) {
  switch (action.type) {
    case Actions.GET_ANALYSES:
      console.log("reducer => ", action);
      return {
        ...state,
        analyses: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export default DashboardPage;
