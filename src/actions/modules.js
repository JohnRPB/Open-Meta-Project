
export const UPDATE_STUDIES = 'UPDATE_STUDIES';
export const updateStudies = (studies) => {
  return {type: UPDATE_STUDIES, data: };
};
export const DB_TEST_RESULTS = 'DB_TEST_RESULTS';
export const dbTestResults = data => {
  return {type: DB_TEST_RESULTS, data};
};
export const DB_TEST_ERROR = 'DB_TEST_ERROR';
export const dbTestError = data => {
  return {type: DB_TEST_ERROR, data};
};

export const DB_TEST = 'DB_TEST';
export const dbTest = () => {
  return dispatch => {
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

