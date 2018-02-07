export const SET_HISTORY = "SET_HISTORY";
export const setHistory = history => {
  return {
    type: SET_HISTORY,
    history
  }
}

export const SET_LOCATION = "SET_LOCATION";
export const setLocation = location => {
  return {
    type: SET_LOCATION,
    location
  }
}

export const SET_MATCH = "SET_MATCH";
export const setMatch = match => {
  return {
    type: SET_MATCH,
    match
  }
}

export const SET_PARAMS = "SET_PARAMS";
export const setParams = params => {
  return {
    type: SET_PARAMS,
    params
  }
}

export const SET_SEARCH = "SET_SEARCH";
export const setSearch = search => {
  return {
    type: SET_SEARCH,
    search
  }
}
