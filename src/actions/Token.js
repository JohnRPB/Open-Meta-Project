import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

export const ADD_TOKEN = "ADD_TOKEN";

export function addToken(token) {
  return {
    type: ADD_TOKEN,
    data: token
  };
}
