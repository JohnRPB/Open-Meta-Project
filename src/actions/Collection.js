import axios from 'axios';
import root from '../lib/root.js';

// -------------------
// ANALYSES
// -------------------

export const GET_COLLECTION = 'GET_COLLECTION';

export function getCollectionSuccess(data) {
  return {
    type: GET_COLLECTION,
    data: data,
    isFetching: false
  };
}

export function getCollection(id) {
  return dispatch => {
    axios
      .get(`${root()}/api/collections/${id}`)
      .then(response => {
        dispatch(getCollectionSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}
