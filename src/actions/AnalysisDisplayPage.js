import axios from "axios";
import root from '../lib/root.js';

// -------------------
// ANALYSES
// -------------------

export const GET_ANALYSIS = "GET_ANALYSIS";

export function getAnalysisSuccess(data) {
  return {
    type: GET_ANALYSIS,
    data: data,
    isFetching: false
  };
}

export function getAnalysis(id) {
  return dispatch => {
    axios
      .get(`${root()}/api/analyses/${id}`)
      .then(response => {
        dispatch(getAnalysisSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}
