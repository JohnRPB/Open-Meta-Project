import axios from "axios";
import root from '../lib/root.js';

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

export const EDIT_ELEMENT = "EDIT_ELEMENT";
export const editElement = data => {
  return { type: EDIT_ELEMENT, data };
};

export const SAVE_ELEMENT = "SAVE_ELEMENT";
export const saveElement = data => {
  return { type: SAVE_ELEMENT, data };
};

export const SAVE_DOCUMENT = "SAVE_DOCUMENT";
export const saveDocument = () => {
  return { type: SAVE_DOCUMENT };
};

export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const deleteElement = data => {
  return { type: DELETE_ELEMENT, data };
};

//export const GET_UPDATED_MODULES = "GET_UPDATED_MODULES";
//export const getUpdatedModules = () => {
  //return { type: GET_UPDATED_MODULES };
//};

export const UPDATE_ANALYSIS = "UPDATE_ANALYSIS";
export function updateAnalysisSuccess(data) {
  return {
    type: UPDATE_ANALYSIS,
    data: data,
    isFetching: false
  };
}

export function updateAnalysis(id, obj) {
  // console.log("id => ", id);
  // console.log("OBJECT FROM UPDATE =>>>>>>>>>>>>>>>>>>>>>>>>>>>", obj);

  return dispatch => {
    axios
      .put(`${root()}/api/analyses/${id}`, obj)
      .then(response => {
        // console.log(
        //   "RESPONSE DATA =>>>>>>>>>>>>>>>>>>>>>>>>>>>",
        //   response.data
        // );

        dispatch(updateAnalysisSuccess(response.data));
      })
      .catch(e => {
        console.error(e);
      });
  };
}

export const LOAD_DOCUMENT = "LOAD_DOCUMENT";
export const loadDocument = data => {
  return { type: LOAD_DOCUMENT, data: data };
};

