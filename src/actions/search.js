export const NEW_TABLES = 'NEW_TABLES';
export const newTables = tables => {
  return {
    type: NEW_TABLES,
    tables
  }
}
export const PERSIST_TABLE = 'PERSIST_TABLE';
export const persistTable = table => {
  return {
    type: PERSIST_TABLE,
    table
  }
}
