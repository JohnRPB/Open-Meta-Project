const root = () =>
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_HEROKU_URL
    : 'http://localhost:8000';

export default root;
