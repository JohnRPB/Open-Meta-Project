import {
  GET_USERS_RESULTS,
  GET_USERS_START,
  GET_USERS_ERROR,
  GET_ANALYSES_RESULTS,
  GET_ANALYSES_START,
  GET_ANALYSES_ERROR,
  GET_COLLECTIONS_RESULTS,
  GET_COLLECTIONS_START,
  GET_COLLECTIONS_ERROR,
  REDIRECT_SUBMISSION
} from "actions/SiteSearchPage";

const initialState = {
  query: "",
  results: [],
  value: null,
  isFetching: false,
  error: null,
  submission: false
};

const SiteSearchPage = (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_SUBMISSION:
      return {
        ...state,
        submission: true
      };
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
        query: action.query,
        results: action.data,
        value: action.value
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        isFetching: false,
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
        query: action.query,
        results: action.data,
        value: action.value
      };
    case GET_ANALYSES_ERROR:
      return {
        ...state,
        isFetching: false,
        query: "Test Failed  " + action.data
      };
    case GET_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case GET_COLLECTIONS_RESULTS:
      return {
        ...state,
        isFetching: false,
        query: action.query,
        results: action.data,
        value: action.value
      };
    case GET_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        query: "Test Failed  " + action.data
      };
    default:
      return state;
  }
};

export default SiteSearchPage;
