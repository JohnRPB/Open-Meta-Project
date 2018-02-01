import {
  ADD_TEXT,
  HANDLE_DROPPING,
  SHOW_FORM,
  DELETE_ELEMENT
} from "../actions/project";
import ItemTypes from "../components/Project/ItemTypes";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";

const initialState = {
  analyses: [],
  dustbins: [
    {
      accepts: [
        ItemTypes.SUMMARY,
        ItemTypes.GRAPH,
        ItemTypes.METHOD,
        NativeTypes.URL,
        NativeTypes.FILE
      ],
      lastDroppedItem: null
    }
    // { accepts: [ItemTypes.METHOD], lastDroppedItem: null },
    // {
    //   accepts: [ItemTypes.GRAPH, ItemTypes.SUMMARY, NativeTypes.URL],
    //   lastDroppedItem: null
    // },
    // { accepts: [ItemTypes.GRAPH, NativeTypes.FILE], lastDroppedItem: null }
  ],
  boxes: [
    { name: "Mean", type: ItemTypes.SUMMARY },
    { name: "Regression", type: ItemTypes.METHOD },
    { name: "Funnel Plot", type: ItemTypes.GRAPH }
  ],
  droppedBoxNames: [],
  showForm: null,
  editing: false
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      let { index, textContent } = action.data;
      //don't allow empty submissions
      if (textContent === undefined) return { ...state };
      //takes care of initial submission
      if (index === undefined) {
        index = 0;
      }
      return {
        ...state,
        analyses: [
          ...state.analyses.slice(0, index),
          { textContent: textContent },
          ...state.analyses.slice(index)
        ]
      };
    case HANDLE_DROPPING:
      let indexOfElement = action.data.index;
      //takes care of initial submission
      if (indexOfElement === undefined) {
        indexOfElement = 0;
      }
      let indexOfDroppedDustbin = action.data.index2;
      let { name } = action.data.item;
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
        analyses: [
          ...state.analyses.slice(0, indexOfElement),
          action.data.item,
          ...state.analyses.slice(indexOfElement)
        ]
      };
    case SHOW_FORM:
      return {
        ...state,
        showForm: action.data
      };
    case DELETE_ELEMENT:
      console.log("SHOWING DATA", action.data);
      return {
        ...state,
        analyses: [
          ...state.analyses.slice(0, action.data),
          ...state.analyses.slice(action.data + 1)
        ]
      };
    default:
      return state;
  }
};

export default project;
