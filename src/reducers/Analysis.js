import * as Actions from "../actions/Analysis";

const initialState = {
  Analysis: null,
  isFetching: true,
  error: null
};

export function Analysis(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ANALYSIS:
      return {
        ...state,
        Analysis: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export default Analysis;
