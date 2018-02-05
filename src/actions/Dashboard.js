import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

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
      .get(`${root}/api/analyses`)
      .then(response => {
        console.log("response =>", response);
        dispatch(getAnalysesSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
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
      url: `${root}/api/users/${id}`,
      method: "get",
      headers: new Headers({
        "x-access-token": token
      })
    })
      .then(response => {
        console.log("response =>", response);
        dispatch(getUserSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
