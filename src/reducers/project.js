import { ADD_TEXT } from "../actions/project";

const initialState = {
  analyses: []
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        analyses: [...state.analyses, action.data]
      };
    default:
      return state;
  }
};

export default project;
