import axios from "axios";
import root from '../lib/root.js';

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
        // console.log("response => ", response);
        dispatch(getAnalysesSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}

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

export function getUser(id, token) {
  return dispatch => {
    axios({
      url: `${root()}/api/users/${id}`,
      method: "get",
      headers: new Headers({
        "x-access-token": token
      })
    })
      .then(response => {
        // console.log("response =>", response);
        dispatch(getUserSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}

export const ADD_COLLECTION = "ADD_COLLECTION";
export function addCollection(data) {
  return {
    type: ADD_COLLECTION,
    data
  }
}
