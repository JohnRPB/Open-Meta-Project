import * as Actions from "../actions/Profile";

const initialState = {
  user: null,
  isFetching: true,
  error: null
};

export function Profile(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_USER:
      return {
        ...state,
        user: action.data,
        isFetching: false
      };
    case Actions.GET_ANALYSES:
      return {
        ...state,
        analyses: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export default Profile;
