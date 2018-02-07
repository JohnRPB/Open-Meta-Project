import * as Actions from "../actions/SelectCollection";

const initialState = {
  id: null,
  error: null
};

export function SelectCollection(state = initialState, action) {
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

export default SelectCollection;
