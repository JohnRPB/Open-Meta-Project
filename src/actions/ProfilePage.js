import axios from "axios";
import root from '../lib/root.js';

// -------------------
// ANALYSES
// -------------------

export const GET_ANALYSES = "GET_ANALYSES";

export function getAnalysesSuccess(data) {
  return {
    type: GET_ANALYSES,
    data: data,
    isFetching: false
  };
}

export function getAnalyses(id) {
  return dispatch => {
    axios
      .get(`${root()}/api/analyses`)
      .then(response => {
        dispatch(getAnalysesSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}
