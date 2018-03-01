import axios from 'axios';
import root from '../lib/root.js';

export const SET_FETCH = 'SET_FETCH';
export const setFetch = bool => {
  return {
    type: SET_FETCH,
    bool,
  };
};
