import axios from "axios";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

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

export const GET_UPDATED_MODULES = "GET_UPDATED_MODULES";
export const getUpdatedModules = () => {
  return { type: GET_UPDATED_MODULES };
};

export const UPDATE_ANALYSIS = "UPDATE_ANALYSIS";
export function updateAnalysisSuccess(data) {
  return {
    type: UPDATE_ANALYSIS,
    data: data,
    isFetching: false
  };
}

export function updateAnalysis(id, obj) {
  console.log("id => ", id);
  return dispatch => {
    axios
      .put(`${root}/api/analyses/${id}`, obj)
      .then(response => {
        console.log(
          "RESPONSE DATA =>>>>>>>>>>>>>>>>>>>>>>>>>>>",
          response.data
        );

        dispatch(updateAnalysisSuccess(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export const LOAD_DOCUMENT = "LOAD_DOCUMENT";
export const loadDocument = data => {
  return { type: LOAD_DOCUMENT, data: data };
};

export const GET_ANALYSIS_AND_LOAD = "GET_ANALYSIS_AND_LOAD";
export function getAnalysisAndLoadSuccess(data) {
  return {
    type: GET_ANALYSIS_AND_LOAD,
    data: data,
    isFetching: false
  };
}

export function getAnalysisAndLoad(id) {
  return dispatch => {
    axios
      .get(`${root}/api/analyses/${id}`)
      .then(response => {
        dispatch(getAnalysisAndLoadSuccess(response.data));
        console.log("response.data => ", response.data);
        return response.data;
      })
      .then(answer => {
        console.log("answer =>", answer);
        dispatch(loadDocument(answer.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
}
