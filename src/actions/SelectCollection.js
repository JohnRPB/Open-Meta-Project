const root =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_HEROKU_URL 
    : "http://localhost:8000";

// -------------------
// ANALYSES
// -------------------

export const SELECT_COLLECTION = "SELECT_COLLECTION";

export function selectCollection(id) {
  return {
    type: SELECT_COLLECTION,
    data: id
  };
}
