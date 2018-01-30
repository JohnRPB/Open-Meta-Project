import * as Actions from "../actions";

const initialState = {
  analyses: []
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_TEXT:
      return {
        ...state,
        analyses: [...state.analyses, action.data]
      };
    default:
      return state;
  }
};

export default project;
