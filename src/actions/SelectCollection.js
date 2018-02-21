
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
