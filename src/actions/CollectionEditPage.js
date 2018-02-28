export const NEW_RESULTS = "NEW_RESULTS";
export const newResults = results => {
  return {
    type: NEW_RESULTS,
    results
  }
}

export const SET_FETCH = "SET_FETCH";
export const setFetch = bool => {
  return {
    type: SET_FETCH,
    bool
  }
}

export const CHANGE_PERSIST = "CHANGE_PERSIST";
export const changePersist = (id, persist, index) => {
  return {
    type: CHANGE_PERSIST,
    id, persist, index
  }
}

export const SET_TAB = "SET_TAB";
export const setTab = tab => {
  return {
    type: SET_TAB,
    tab
  }
}

export const CHANGE_BUTTON = "CHANGE_BUTTON";
export const changeButton = number => {
  return {
    type: CHANGE_BUTTON,
    number
  }
}

export const PERSIST_ALL = "PERSIST_ALL";
export const persistAll = () => {
  return {
    type: PERSIST_ALL,
  }
}

export const SET_PAGE = "SET_PAGE";
export const setPage = page => {
  return {
    type: SET_PAGE,
    page
  }
}

export const SET_OPEN = "SET_OPEN";
export const setOpen = bool => {
  return {
    type: SET_OPEN,
    bool
  }
}

export const CLEAR = "CLEAR";
export const clear = () => {
  return {
    type: CLEAR,
  }
}

export const SET_CURRENT_COLLECTION = "SET_CURRENT_COLLECTION";
export const setCurrentCollection = collection => {
  return {
    type: SET_CURRENT_COLLECTION,
    collection
  }
}
