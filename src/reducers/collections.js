import {BUMP_AUTHORS, CEASE_PERSIST, CHANGE_PAGE, FLIP_ACTIVE, NEW_TABLES, PERSIST_TABLE, RESET_AUTHORS} from 'actions/collections'

const initialState = {
  persistObj: {},
  persistantTables: [],
  newTables:[],
  page: 1,
  active: 1,
  authors: 1
}

const collections = (state = initialState, action) => {
  switch(action.type) {
    case NEW_TABLES:
      let checkedStudies = action.tables.filter(study => !state.persistObj[study.id]);
      return {
        ...state,
        newTables: checkedStudies,
        page: 1
      };
    case PERSIST_TABLE:
      let newPersistTableArray = state.persistantTables.slice(0);
      let newPersistTable; 
      let newHashObj = Object.assign({}, state.hashObj);
      state.newTables.forEach((study,index) => {
        if(study.id === action.table){
          newPersistTable = [study, index];
          newHashObj[study.id] = 1;
        }
      });
      let updatedNewTables = state.newTables.slice(0, newPersistTable[1]).concat(state.newTables.slice(newPersistTable[1] + 1));
      newPersistTableArray[newPersistTableArray.length] = newPersistTable[0]
      return {
        ...state,
        persistantTables: newPersistTableArray,
        newTables: updatedNewTables,
        persistObj: newHashObj
      }
    case CEASE_PERSIST:
      // console.log(action);
      let updatedPersistTables = [];
      let updatedNonPersist = [];
      let updatedHashObj = {}
      state.persistantTables.forEach(study => {
        if(study.id === action.table){
          updatedNonPersist = [study].concat(state.newTables.slice(0));
        } else {
          updatedPersistTables.push(study);
          updatedHashObj[study.id] = 1;
        }
      });
      return {
        ...state,
        persistantTables: updatedPersistTables,
        newTables: updatedNonPersist,
        persistObj: updatedHashObj
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.number
      }
    case FLIP_ACTIVE:
      return {
        ...state,
        active: !state.active
      }
    case BUMP_AUTHORS:
      return {
        ...state,
        authors: state.authors + 1
      }
    case RESET_AUTHORS:
      return {
        ...state,
        authors: 1
      }
    default:
      return state
  }
}

export default collections
