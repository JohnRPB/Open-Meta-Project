import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

export const GET_ANALYSES = "GET_ANALYSES";

export function getAnalyses(id) {
  console.log("hi from actions #1");
  return dispatch => {
    axios
      .get(`${root}/api/analyses`, { crossDomain: true })
      .then(response => {
        console.log("hi from actions");
        console.log("headers =>", response);
      })
      .catch(e => {
        console.log(e);
      });
  };
}
