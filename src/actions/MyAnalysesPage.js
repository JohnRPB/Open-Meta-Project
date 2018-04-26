import axios from 'axios';
import root from 'lib/root.js';

export const SET_FETCH_ANALYSIS = 'SET_FETCH_ANALYSIS';
export const setFetch = bool => {
  return {
    type: SET_FETCH_ANALYSIS,
    bool,
  };
};
