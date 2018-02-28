import * as Actions from "../actions/SelectCollectionPage";

const initialState = {
  id: null,
  error: null
};

export function SelectCollectionPage(state = initialState, action) {
  switch (action.type) {
    case Actions.SELECT_COLLECTION:
      return {
        ...state,
        id: action.data
      };
    default:
      return state;
  }
}

export default SelectCollectionPage;
