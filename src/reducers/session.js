// import {SET_USER, SET_COLLECTION, SET_ANALYSIS} from '../actions/session';
import * as Actions from "../actions/session";

const initialState = {
  user: {},
  collection: {},
  analysis: {},  
  token: "",
  id: "",
  fetched: false,
  error: null
};

const reducerObj = {
  SET_USER: (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  },
  "SET_USER_SESSION": (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  },
  SET_COLLECTION: (state, action) => {
    return {
      ...state,
      collection: action.collection,
    };
  },
  SET_ANALYSIS: (state, action) => {
    return {
      ...state,
      analysis: action.analysis,
    };
  },
  ADD_TOKEN: (state, action) => {
    return {
      ...state,
      token: action.data,
      fetched: true
    };
  },
  ADD_ID: (state, action) => {
    return {
      ...state,
      id: action.data,
      fetched: true
    };
  }
};

const session = (state = initialState, action) =>
  reducerObj[action.type] ? reducerObj[action.type](state, action) : state;

export default session;
