import * as Actions from "../actions/Token";

const initialState = {
  token: "",
  id: "",
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
    case Actions.ADD_ID:
      return {
        ...state,
        id: action.data,
        fetched: true
      };
    default:
      return state;
  }
}

export default MyAnalysesPage;
