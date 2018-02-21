// import axios from "axios";

export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_ID = "ADD_ID";

export function addToken(token) {
  return {
    type: ADD_TOKEN,
    data: token
  };
}

export function addId(id) {
  return {
    type: ADD_ID,
    data: id
  };
}
