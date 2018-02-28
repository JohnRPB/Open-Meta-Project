import * as Actions from "../actions/DashboardPage";

const initialState = {
  analyses: [],
  isFetching: true,
  user: {
    analyses: [],
    collections: [],
  },
  error: null
};

export function DashboardPage(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ANALYSES:
      return {
        ...state,
        analyses: action.data,
        isFetching: false
      };
    case Actions.GET_USER:
      return {
        ...state,
        user: action.data,
        isFetching: false
      };
    case Actions.ADD_COLLECTION:
      return {
        ...state,
        user: {
          ...state.user,
          collections:[
            ...state.user.collections,
            action.data
          ]
        }
      }
    default:
      return state;
  }
}

export default DashboardPage;
