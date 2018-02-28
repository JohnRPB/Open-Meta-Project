export const SET_USER = "SET_USER";
export const setUser = user => {
  return {
    type: SET_USER,
    user
  }
}

export const SET_COLLECTION = "SET_COLLECTION";
export const setCollection = collection => {
  return {
    type: SET_COLLECTION,
    collection
  }
}

export const SET_ANALYSIS = "SET_ANALYSIS";
export const setAnalysis = analysis => {
  return {
    type: SET_ANALYSIS,
    analysis
  }
}

export const ADD_TOKEN = "ADD_TOKEN";
export function addToken(token) {
  return {
    type: ADD_TOKEN,
    data: token
  };
}

export const ADD_ID = "ADD_ID";
export function addId(id) {
  return {
    type: ADD_ID,
    data: id
  };
}
