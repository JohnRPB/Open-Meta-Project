export const ADD_TEXT = "ADD_TEXT";
export const addText = data => {
  return { type: ADD_TEXT, data };
};

export const HANDLE_DROPPING = "HANDLE_DROPPING";
export const handleDropping = data => {
  return { type: HANDLE_DROPPING, data };
};

export const SHOW_FORM = "SHOW_FORM";
export const showForm = data => {
  return { type: SHOW_FORM, data };
};

export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const deleteElement = data => {
  return { type: DELETE_ELEMENT, data };
};

export const GET_UPDATED_MODULES = "GET_UPDATED_MODULES";
export const getUpdatedModules = () => {
  return { type: GET_UPDATED_MODULES };
};
