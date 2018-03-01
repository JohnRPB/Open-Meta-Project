
const initialState = {
  Analysis: null,
  isFetching: true,
  error: null
};

export function AnalysisDisplayPage(state = initialState, action) {
  switch (action.type) {
    case "SET_ANALYSIS_DISPLAY":
      return {
        ...state,
        Analysis: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export default AnalysisDisplayPage;
