import { ADD_TEXT, HANDLE_DROPPING } from "../actions/project";
import ItemTypes from "../components/Project/ItemTypes";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";

const initialState = {
  analyses: [],
  dustbins: [
    { accepts: [ItemTypes.SUMMARY], lastDroppedItem: null },
    { accepts: [ItemTypes.METHOD], lastDroppedItem: null },
    {
      accepts: [ItemTypes.GRAPH, ItemTypes.SUMMARY, NativeTypes.URL],
      lastDroppedItem: null
    },
    { accepts: [ItemTypes.GRAPH, NativeTypes.FILE], lastDroppedItem: null }
  ],
  boxes: [
    { name: "Mean", type: ItemTypes.SUMMARY },
    { name: "Regression", type: ItemTypes.METHOD },
    { name: "Funnel Plot", type: ItemTypes.GRAPH }
  ],
  droppedBoxNames: []
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        analyses: [...state.analyses, action.data]
      };
    case HANDLE_DROPPING:
      let indexOfDroppedDustbin = action.data.index;
      let { name } = action.data.item;
      console.log(name);
      console.log("ACTION.DATA", action.data);
      console.log("STATE.DUSTBINS", state.dustbins);
      let dustbinsUpdated = state.dustbins.map((dustbin, index) => {
        if (index === indexOfDroppedDustbin) {
          return Object.assign({}, dustbin, {
            lastDroppedItem: action.data.item
          });
        } else {
          return dustbin;
        }
      });
      return {
        ...state,
        dustbins: dustbinsUpdated,
        droppedBoxNames: [...state.droppedBoxNames, [name]],
        analyses: [...state.analyses, action.data.item]
      };
    default:
      return state;
  }
};

export default project;
