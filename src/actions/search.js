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

export const CEASE_PERSIST = 'CEASE_PERSIST';
export const ceasePersist = table => {
  return {
    type: CEASE_PERSIST,
    table
  }
}

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const changePage = number => {
  return {
    type: CHANGE_PAGE,
    number
  }
}

export const FLIP_ACTIVE = 'FLIP_ACTIVE';
export const flipActive = () => {
  return {
    type: FLIP_ACTIVE,
  }
}

export const BUMP_AUTHORS = 'BUMP_AUTHORS';
export const bumpAuthors = () => {
  return {
    type: BUMP_AUTHORS,
  }
}
export const RESET_AUTHORS = 'RESET_AUTHORS';
export const resetAuthors = () => {
  return {
    type: RESET_AUTHORS,
  }
}
