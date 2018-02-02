import {
  GET_USERS_RESULTS,
  GET_USERS_START,
  GET_USERS_ERROR,
  GET_ANALYSES_RESULTS,
  GET_ANALYSES_START,
  GET_ANALYSES_ERROR
} from "../actions/sitesearch";

const initialState = {
  query: "",
  results: [],
  isFetching: false,
  error: null
};

const sitesearch = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case GET_USERS_RESULTS:
      return {
        ...state,
        isFetching: false,
        results: action.data,
        query: "Test Succeeded!  " + action.data
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
        results: action.data,
        query: "Test Failed!  " + action.data
      };
    case GET_ANALYSES_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case GET_ANALYSES_RESULTS:
      return {
        ...state,
        isFetching: false,
        query: action.data,
        results: action.data,
        query: "Test Succeeded!  " + action.data
      };
    case GET_ANALYSES_ERROR:
      return {
        ...state,
        isFetching: false,
        results: action.data,
        query: "Test Failed  " + action.data
      };
    default:
      return state;
  }
};

export default sitesearch;
