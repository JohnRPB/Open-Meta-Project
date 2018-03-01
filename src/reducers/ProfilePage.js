import * as Actions from "actions/ProfilePage";

const initialState = {
  user: null,
  isFetching: true,
  error: null
};

export function ProfilePage(state = initialState, action) {
  switch (action.type) {
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

export default ProfilePage;
