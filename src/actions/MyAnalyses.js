import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

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
      .get(`${root}/api/myanalyses`)
      .then(response => {
        dispatch(getAnalysesSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

// -------------------
// COLLECTIONS
// -------------------

export const GET_COLLECTIONS = "GET_COLLECTIONS";

export function getCollectionsSuccess(data) {
  return {
    type: GET_COLLECTIONS,
    data: data,
    isFetching: false
  };
}

export function getCollections(id) {
  return dispatch => {
    axios
      .get(`${root}/api/collections`)
      .then(response => {
        console.log("response =>", response);
        dispatch(getCollectionsSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
