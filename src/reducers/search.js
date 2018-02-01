import { GET_USERS_RESULTS, GET_USERS_ERROR } from "../actions";

const initialState = {
  query: "",
  results: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_RESULTS:
      return {
        ...state,
        results: [...state.results, action.data],
        query: "Test Succeeded!  " + action.data
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        results: [...state.results, action.data],
        query: "Test Failed!  " + action.data
      };
    default:
      return state;
  }
};

export default search;
