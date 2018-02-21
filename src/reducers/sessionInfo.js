// import {SET_USER, SET_COLLECTION, SET_ANALYSIS} from '../actions/sessionInfo';

const initialState = {
  user: {},
  collection: {},
  analysis: {},
};

const reducerObj = {
  SET_USER: (state, action) => {
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
  }
};

const sessionInfo = (state = initialState, action) =>
  reducerObj[action.type] ? reducerObj[action.type](state, action) : state;

export default sessionInfo;
