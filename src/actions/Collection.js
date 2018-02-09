import axios from 'axios';
const root =
  process.env.NODE_ENV === 'production'
    ? 'https://radiant-taiga-58264.herokuapp.com'
    : 'http://localhost:8000';

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
      .get(`${root}/api/collections/${id}`)
      .then(response => {
        dispatch(getCollectionSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
