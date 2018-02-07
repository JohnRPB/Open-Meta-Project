const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
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
