// import {
//   NEW_RESULTS,
//   SET_FETCH,
//   CHANGE_PERSIST,
//   SET_TAB,
//   CHANGE_BUTTON,
//   SET_PAGE,
//   SET_OPEN,
//   CLEAR,
//   SET_CURRENT_COLLECTION
// } from '../actions/CollectionEditPage';

const initialState = {
  varObj: {
    isFetching: false,
    tab: 0,
    page: 1,
    buttons: 1,
    open: false,
  },
  hashObj: {},
  results: [],
  persisted: [],
  study: null,
  Collection: null
};

const reduceObject = {
  NEW_RESULTS: (state, action) => {
    return {
      ...state,
      results: action.results,
    };
  },
  SET_FETCH: (state, action) => {
    return {
      ...state,
      varObj: {
        ...state.varObj,
        isFetching: action.bool,
      },
    };
  },
  CHANGE_PERSIST: (state, action) => {
    let newResults;
    let newPersisted;
    let newHash = Object.assign({}, state.hashObj);
    if (action.persist) {
      newResults = state.results.slice(0);
      let removed = newResults.splice(action.index, 1);
      newPersisted = state.persisted.slice(0).concat(removed);
      newHash[removed.id] = 1;
    } else {
      newPersisted = state.persisted.slice(0);
      newResults = newPersisted
        .splice(action.index, 1)
        .concat(state.results.slice(0));
      newHash[newResults[0].id] = 0;
    }
    return {
      ...state,
      results: newResults,
      persisted: newPersisted,
      hashObj: newHash,
    };
  },
  PERSIST_ALL: (state, action) => {
    let newPersisted = state.persisted.slice(0).concat(state.results.slice(0));
    let newHash = {};
    newPersisted.forEach(study => (newHash[study.id] = 1));
    return {
      ...state,
      persisted: newPersisted,
      results: [],
      hashObj: newHash,
    };
  },
  SET_TAB: (state, action) => {
    return {
      ...state,
      varObj: {
        ...state.varObj,
        tab: action.tab,
      },
    };
  },
  CHANGE_BUTTON: (state, action) => {
    return {
      ...state,
      varObj: {
        ...state.varObj,
        buttons: action.number,
      },
    };
  },
  SET_PAGE: (state, action) => {
    return {
      ...state,
      varObj: {
        ...state.varObj,
        page: action.page,
      },
    };
  },
  SET_OPEN: (state, action) => {
    return {
      ...state,
      varObj: {
        ...state.varObj,
        open: action.bool,
      },
    };
  },
  CLEAR: (state, action) => {
    return initialState
  },
  "SET_COLLECTION_EDIT": (state, action) => {
    return {
      ...state,
      Collection: action.data    
    }
  }
};

const CollectionEditPage = (state = initialState, action) => {
  if (reduceObject[action.type] !== undefined) {
    return reduceObject[action.type](state, action);
  }
  return state;
};

export default CollectionEditPage;
