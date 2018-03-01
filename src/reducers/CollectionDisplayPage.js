
const initialState = {
  Collection: null,
  isFetching: true,
  error: null
};

export function CollectionDisplayPage(state = initialState, action) {
  switch (action.type) {
    case "SET_COLLECTION_DISPLAY":
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
