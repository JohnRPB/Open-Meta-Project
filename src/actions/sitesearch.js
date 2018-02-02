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
export const getAnalysesError = data => {
  return { type: GET_ANALYSES_ERROR, data };
};

export function getAnalyses(id) {
  return dispatch => {
    axios
      .get(`${root}/api/myanalyses`)
      .then(response => {
        console.log("response =>", response);
        dispatch(getAnalysesStart(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
