import {NEW_TABLES, PERSIST_TABLE} from '../actions/search'

const initialState = {
  persistObj: {},
  persistantTables: [],
  newTables:[]
}

const search = (state = initialState, action) => {
  switch(action.type) {
    case NEW_TABLES:
      let checkedStudies = action.tables.map(study => {
        if(!state.persistObj[study.id]){
          return study;
        }
      });
      return {
        ...state,
        newTables: checkedStudies
      };
    case PERSIST_TABLE:
      console.log(action);
      let newPersistTableArray = state.persistantTables.slice(0);
      let newPersistTable; 
      let newHashObj = Object.assign({}, state.hashObj);
      state.newTables.forEach((study,index) => {
        if(study.id == action.table){
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
    default:
      return state
  }
}

export default search
