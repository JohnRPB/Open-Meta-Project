import * as Actions from "../actions/Collection";

const initialState = {
  Collection: null,
  isFetching: true,
  error: null
};

export function CollectionDisplayPage(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_COLLECTION:
      return {
        ...state,
        Collection: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export default CollectionDisplayPage;
