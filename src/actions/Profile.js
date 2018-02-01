import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

export const GET_USER = "GET_USER";

export function getUserSuccess(data) {
  return {
    type: GET_USER,
    data: data
  };
}

export function getUser(id) {
  return dispatch => {
    axios
      // dave is already using this route to grab studies?
      .get(`${root}/api/user`)
      .then(response => {
        console.log("response =>", response);
        dispatch(getUserSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
