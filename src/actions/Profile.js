import axios from "axios";
import root from '../lib/root.js';

// -------------------------------
// GETTING A USER
// -------------------------------

export const GET_USER = "GET_USER";

export function getUserSuccess(data) {
  return {
    type: GET_USER,
    data: data,
    isFetching: false
  };
}

export function getUser(id) {
  return dispatch => {
    axios
      // dave is already using this route to grab studies?
      .get(`${root()}/api/users/${id}`)
      .then(response => {
        // console.log("response =>", response);
        dispatch(getUserSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
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
      .get(`${root()}/api/analyses`)
      .then(response => {
        dispatch(getAnalysesSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}
