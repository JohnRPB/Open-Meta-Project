import * as Actions from '../actions/MyAnalysesPage';

const initialState = {
  isFetching: true,
  error: null,
};

export function MyAnalysesPage(state = initialState, action) {
  switch (action.type) {
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
