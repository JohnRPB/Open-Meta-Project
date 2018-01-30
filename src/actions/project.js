export const ADD_TEXT = "ADD_TEXT";
export const addText = data => {
  return { type: ADD_TEXT, data };
};

export const HANDLE_DROPPING = "HANDLE_DROPPING";
export const handleDropping = data => {
  return { type: HANDLE_DROPPING, data };
};
