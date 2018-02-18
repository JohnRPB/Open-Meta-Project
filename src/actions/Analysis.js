import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_HEROKU_URL
    : "http://localhost:8000";

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
      .get(`${root}/api/analyses/${id}`)
      .then(response => {
        dispatch(getAnalysisSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
