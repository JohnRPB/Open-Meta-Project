import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

export const GET_USERS_START = "GET_USERS_START";
export const getUsersStart = () => {
  return { type: GET_USERS_START };
};
export const GET_USERS_RESULTS = "GET_USERS_RESULTS";
export const getUsersResults = data => {
  return { type: GET_USERS_RESULTS, data };
};
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const getUsersError = data => {
  return { type: GET_USERS_ERROR, data };
};

export const GET_USERS = "GET_USERS";
export const getUsers = () => {
  return dispatch => {
    dispatch(getUsersStart());
    axios
      .get(`${root}/api/users`) //need to modify user search
      .then(res => {
        console.log(res);
        console.log("ROOT: " + `${root}/api/users/`);
        dispatch(getUsersResults(JSON.stringify(res.data)));
      })
      .catch(err => dispatch(getUsersError(err)));
  };
};

export const GET_ANALYSES_START = "GET_ANALYSES_START";
export const getAnalysesStart = () => {
  return { type: GET_ANALYSES_START };
};
export const GET_ANALYSES_RESULTS = "GET_ANALYSES_RESULTS";
export const getAnalysesResults = data => {
  return { type: GET_ANALYSES_RESULTS, data };
};
export const GET_ANALYSES_ERROR = "GET_ANALYSES_ERROR";
export const getAnalysesError = (data, query) => {
  return { type: GET_ANALYSES_ERROR, data, query };
};

export function getAnalyses(data) {
  return dispatch => {
    dispatch(getAnalysesStart());
    console.log("query =>", data.query);
    let query = data.query;
    axios
      .get(`http://localhost:8000/api/myanalyses/${query}`)
      .then(response => {
        console.log("response =>", response.data);
        dispatch(getAnalysesResults(response.data, query));
      })
      .catch(e => {
        dispatch(getAnalysesError(e));
      });
  };
}

export const GET_COLLECTIONS_START = "GET_COLLECTIONS_START";
export const getCollectionsStart = () => {
  return { type: GET_COLLECTIONS_START };
};
export const GET_COLLECTIONS_RESULTS = "GET_COLLECTIONS_RESULTS";
export const getCollectionsResults = data => {
  return { type: GET_COLLECTIONS_RESULTS, data };
};
export const GET_COLLECTIONS_ERROR = "GET_COLLECTIONS_ERROR";
export const getCollectionsError = data => {
  return { type: GET_ANALYSES_ERROR, data };
};

export function getCollections(data) {
  return dispatch => {
    dispatch(getCollectionsStart());
    axios
      .get(`${root}/api/collections`)
      .then(response => {
        console.log("response =>", response);
        console.log("query =>", data.query);
        dispatch(getCollectionsResults(response));
      })
      .catch(e => {
        dispatch(getCollectionsError(e));
      });
  };
}
