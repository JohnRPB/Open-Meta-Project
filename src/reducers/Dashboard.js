import * as Actions from "../actions/Dashboard";

const initialState = {
  analyses: [],
  isFetching: true,
  error: null
};

export function DashboardPage(state = initialState, action) {
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
