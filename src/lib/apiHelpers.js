import root from './root';
import axios from 'axios';
import {setUser, setCollection, setAnalysis} from 'actions/session.js';

export const setUserFor = (suffix, user) => {
  return {
    type: `SET_USER_${suffix}`,
    user
  }
}
export const getUserFor = (suffix, id, dispatch) => {
  return axios.get(`${root()}/api/users/${id}`)
    .then(response => {
      dispatch(setUserFor(suffix, response.data))
    })
    .catch(error => console.error(error));
}

export const setCollectionFor = (suffix, collection) => {
  return {
    type: `SET_COLLECTION_${suffix}`,
    data: collection
  }
}
export const getCollectionFor = (suffix, id, dispatch) => {
  return axios.get(`${root()}/api/collections/${id}`)
    .then(response => {
      dispatch(setCollectionFor(suffix, response.data))
    })
    .catch(error => console.error(error));
}

export const setAnalysisFor = (suffix, analysis) => {
  return {
    type: `SET_ANALYSIS_${suffix}`,
    data: analysis
  }
}
export const getAnalysisFor = (suffix, id, dispatch) => {
  return axios.get(`${root()}/api/analyses/${id}`)
    .then(response => {
      dispatch(setAnalysisFor(suffix, response.data))
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
