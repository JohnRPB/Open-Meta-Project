import axios from 'axios';
import root from 'lib/root';

export const REDIRECT_SUBMISSION = 'REDIRECT_SUBMISSION';
export const redirectSubmission = () => {
  return { type: REDIRECT_SUBMISSION };
};

export const GET_USERS_START = 'GET_USERS_START';
export const getUsersStart = () => {
  return { type: GET_USERS_START };
};

export const GET_USERS_RESULTS = 'GET_USERS_RESULTS';
export const getUsersResults = (data, query, value) => {
  return { type: GET_USERS_RESULTS, data, query, value };
};

export const GET_USERS_ERROR = 'GET_USERS_ERROR';
export const getUsersError = data => {
  return { type: GET_USERS_ERROR, data };
};

export function getUsers(data, value) {
  return dispatch => {
    dispatch(getUsersStart());
    // console.log('query =>', data);
    let query = data;
    axios
      .get(`${root()}/api/users/sitesearch/${query}`)
      .then(response => {
        // console.log('response =>', response.data);
        dispatch(getUsersResults(response.data, query, value));
      })
      .catch(e => {
        dispatch(getUsersError(e));
      });
  };
}

export const GET_ANALYSES_START = 'GET_ANALYSES_START';
export const getAnalysesStart = () => {
  return { type: GET_ANALYSES_START };
};
export const GET_ANALYSES_RESULTS = 'GET_ANALYSES_RESULTS';
export const getAnalysesResults = (data, query, value) => {
  return { type: GET_ANALYSES_RESULTS, data, query, value };
};
export const GET_ANALYSES_ERROR = 'GET_ANALYSES_ERROR';
export const getAnalysesError = data => {
  return { type: GET_ANALYSES_ERROR, data };
};

export function getAnalyses(data, value) {
  return dispatch => {
    dispatch(getAnalysesStart());
    // console.log('query =>', data);
    let query = data;
    axios
      .get(`${root()}/api/myanalyses/${query}`)
      .then(response => {
        // console.log('response =>', response.data);
        dispatch(getAnalysesResults(response.data, query, value));
      })
      .catch(e => {
        dispatch(getAnalysesError(e));
      });
  };
}

export const GET_COLLECTIONS_START = 'GET_COLLECTIONS_START';
export const getCollectionsStart = () => {
  return { type: GET_COLLECTIONS_START };
};
export const GET_COLLECTIONS_RESULTS = 'GET_COLLECTIONS_RESULTS';
export const getCollectionsResults = (data, query, value) => {
  return { type: GET_COLLECTIONS_RESULTS, data, query, value };
};
export const GET_COLLECTIONS_ERROR = 'GET_COLLECTIONS_ERROR';
export const getCollectionsError = data => {
  return { type: GET_COLLECTIONS_ERROR, data };
};

export function getCollections(data, value) {
  return dispatch => {
    dispatch(getCollectionsStart());
    // console.log('query =>', data);
    let query = data;
    axios
      .get(`${root()}/api/collections/sitesearch/${query}`)
      .then(response => {
        // console.log('response =>', response.data);
        dispatch(getCollectionsResults(response.data, query, value));
      })
      .catch(e => {
        dispatch(getCollectionsError(e));
      });
  };
}
