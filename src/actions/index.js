import axios from 'axios';
const root =
  process.env.NODE_ENV === 'production'
    ? 'https://radiant-taiga-58264.herokuapp.com'
    : 'http://localhost:8000';

export const EXPRESS_TEST_START = 'EXPRESS_TEST_START';
export const expressTestStart = () => {
  return {type: EXPRESS_TEST_START};
};

export const EXPRESS_TEST_RESULTS = 'EXPRESS_TEST_RESULTS';
export const expressTestResults = data => {
  return {type: EXPRESS_TEST_RESULTS, data};
};

export const EXPRESS_TEST_ERROR = 'EXPRESS_TEST_ERROR';
export const expressTestError = data => {
  return {type: EXPRESS_TEST_ERROR, data};
};

console.log('------------------- START process.env -------------------');
console.log(process.env.NODE_ENV);
console.log('-------------------- END process.env --------------------');

console.log('root: ', root);

export const EXPRESS_TEST = 'EXPRESS_TEST';
export const expressTest = () => {
  return dispatch => {
    dispatch(expressTestStart());
    axios
      .get(`${root}/api/express-test`,{
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        console.log(res);
        dispatch(expressTestResults(JSON.stringify(res.data)));
      })
      .catch(err => dispatch(expressTestError(err)));
  };
};

export const DB_TEST_START = 'DB_TEST_START';
export const dbTestStart = () => {
  return {type: DB_TEST_START};
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
