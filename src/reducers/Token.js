import * as Actions from "../actions/Token";

const initialState = {
  token: "",
  fetched: false,
  error: null
};

export function MyAnalysesPage(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TOKEN:
      return {
        ...state,
        token: action.data,
        fetched: true
      };
    default:
      return state;
  }
}

export default MyAnalysesPage;
