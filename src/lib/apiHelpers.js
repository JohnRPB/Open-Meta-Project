import root from './root';
import axios from 'axios';
import {setUser, setCollection, setAnalysis} from '../actions/sessionInfo.js';

export const getUser = (id, dispatch) => {
  return axios.get(`${root()}/api/users/${id}`)
    .then(response => {
      dispatch(setUser(response.data))
    })
    .catch(error => console.error(error));
}

export const getCollection = (id, dispatch) => {
  return axios.get(`${root()}/api/collections/${id}`)
    .then(response => {
      dispatch(setCollection(response.data))
    })
    .catch(error => console.error(error));
}

export const getAnalysis = (id, dispatch) => {
  return axios.get(`${root()}/api/analyses/${id}`)
    .then(response => {
      dispatch(setAnalysis(response.data))
    })
    .catch(error => console.error(error));
}
