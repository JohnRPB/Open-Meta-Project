import * as Actions from '../actions/MyAnalyses';

const initialState = {
  isFetching: true,
  error: null,
};

export function MyAnalysesPage(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ANALYSES:
      return {
        ...state,
        analyses: action.data,
        isFetching: false,
      };
    case Actions.GET_COLLECTIONS:
      return {
        ...state,
        collections: action.data,
        isFetching: false,
      };
    case Actions.GET_USER:
      return {
        ...state,
        user: action.data,
        isFetching: false,
      };
    case Actions.SET_FETCH:
      return {
        ...state,
        isFetching: action.bool,
      };
    default:
      return state;
  }
}

export default MyAnalysesPage;
