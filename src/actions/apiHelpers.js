import root from 'lib/root';
import axios from 'axios';
import {setUser, setCollection, setAnalysis} from 'actions/session.js';

// ---------------------------------------------------------
// STORE SETTERS 
// 2018-03-01 15:36
// ---------------------------------------------------------

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

// ---------------------------------------------------------
// DATABASE UPDATERS
// 2018-03-01 15:37
// ---------------------------------------------------------

export const updateAnalysisFor = (suffix, analysis) => {
  return {
    type: `SAVE_ANALYSIS_${suffix}`,
    data: analysis
  }
}
export const saveAnalysisFor = (suffix, id, analysis, dispatch) => {
  return axios.put(`${root()}/api/collections/${id}`, analysis)
    .then(response => {
      dispatch(updateAnalysisFor(suffix, analysis))
    })
    .catch(error => console.error(error));
}

export const updateCollectionFor = (suffix, collection) => {
  return {
    type: `SAVE_COLLECTION_${suffix}`,
    data: collection 
  }
}

export const saveCollectionFor = (suffix, id, collection, dispatch) => {
  return axios.put(`${root()}/api/collections/${id}`, collection)
    .then(response => {
      dispatch(updateAnalysisFor(suffix, collection))
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
