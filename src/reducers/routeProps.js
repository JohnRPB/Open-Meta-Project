// import {SET_HISTORY, SET_LOCATION, SET_MATCH, SET_PARAMS, SET_SEARCH} from '../actions/routeProps';

const initialState = {
  history: null,
  location: null,
  match: null,
  params: null,
  search: null
}

const reducerObject = {
  SET_HISTORY: (state, action) => {
    return {
      ...state,
      history: action.history
    }
  },
  SET_LOCATION: (state, action) => {
    return {
      ...state,
      location: action.location
    }
  },
  SET_MATCH: (state, action) => {
    return {
      ...state,
      match: action.match
    }
  },
  SET_PARAMS: (state, action) => {
    return {
      ...state,
      params: action.params
    }
  },
  SET_SEARCH: (state, action) => {
    return {
      ...state,
      search: action.search
    }
  },
}

const routeProps = (state = initialState, action) => {
  if(reducerObject[action.type] !== undefined)
    return reducerObject[action.type](state, action);
  return state;
}

export default routeProps;
