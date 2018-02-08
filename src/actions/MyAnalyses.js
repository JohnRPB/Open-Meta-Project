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

export function getAnalyses(ids) {
  let promises = [];

  for (let i = 0; i < ids.length; i++) {
    promises.push(axios.get(`${root}/api/analyses${ids[i]}`));
  }

  return dispatch => {
    axios
      .all(promises)
      .then(response => {
        console.log("response in actions => ", response);
        dispatch(getAnalysesSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

// original
// export function getAnalyses(ids) {
//   return dispatch => {
//     axios
//       .get(`${root}/api/analyses`)
//       .then(response => {
//         console.log("response => ", response);
//         dispatch(getAnalysesSuccess(response.data));
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };
// }

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
        dispatch(getCollectionsSuccess(response.data));
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
        dispatch(getUserSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
