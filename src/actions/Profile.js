import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

// -------------------------------
// GETTING A USER
// -------------------------------

export const GET_USER = "GET_USER";

export function getUserSuccess(data) {
  return {
    type: GET_USER,
    data: data
  };
}

export function getUser(id) {
  return dispatch => {
    axios
      // dave is already using this route to grab studies?
      .get(`${root}/api/user`)
      .then(response => {
        console.log("response =>", response);
        dispatch(getUserSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

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
