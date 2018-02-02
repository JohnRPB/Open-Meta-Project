
// Remove a study
export const REMOVE_STUDY = 'REMOVE_STUDY';
export const removeStudy = (studyId) => {
  return {type: REMOVE_STUDY, data: studyId };
};

// Add a study
export const ADD_STUDY = 'ADD_STUDY';
export const addStudy = (studyId) => {
  return {type: ADD_STUDY, data: studyId };
};

export const UPDATE_SINGLE_STUDY = 'UPDATE_SINGLE_STUDY';
export const updateSingleStudy = (updateType, studyId) => {
  return dispatch => {

    updateType ? 
      addStudy(studyId) : 
      removeStudy(studyId);

    

    dispatch(dbTestStart());
    axios
      .get(`${root}/api/users`)
      .then(res => {
        console.log(res);
        console.log("ROOT: " + `${root}/api/users`);
        dispatch(dbTestResults(JSON.stringify(res.data)));
      })
      .catch(err => dispatch(dbTestError(err)));
  };
};

