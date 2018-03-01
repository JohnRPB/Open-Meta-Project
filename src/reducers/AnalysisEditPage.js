import {
  REMOVE_STUDY,
  ADD_STUDY,
  UPDATE_LOC,
  GET_COMPUTATION_START,
  GET_COMPUTATION_ERROR,
} from 'actions/modules';

import {
  ADD_TEXT,
  HANDLE_DROPPING,
  SHOW_FORM,
  DELETE_ELEMENT,
  GET_UPDATED_MODULES,
  EDIT_ELEMENT,
  SAVE_ELEMENT,
  SAVE_DOCUMENT,
  UPDATE_ANALYSIS,
  GET_ANALYSIS_AND_LOAD,
  LOAD_DOCUMENT,
} from 'actions/AnalysisEditPage';
// import * as Actions from "actions/Analysis";

import {NativeTypes} from 'react-dnd-html5-backend';

const ItemTypes = {
  METHOD: 'method',
  SUMMARY: 'summary',
  GRAPH: 'graph',
};

const initialState = {
  blocks: [],
  dustbins: [
    {
      accepts: [
        ItemTypes.SUMMARY,
        ItemTypes.GRAPH,
        ItemTypes.METHOD,
        NativeTypes.URL,
        NativeTypes.FILE,
      ],
      lastDroppedItem: null,
    },
    // { accepts: [ItemTypes.METHOD], lastDroppedItem: null },
    // {
    //   accepts: [ItemTypes.GRAPH, ItemTypes.SUMMARY, NativeTypes.URL],
    //   lastDroppedItem: null
    // },
    // { accepts: [ItemTypes.GRAPH, NativeTypes.FILE], lastDroppedItem: null }
  ],
  boxes: [
    {
      displayName: 'Simple Plot',
      functionName: 'simplePlot',
      loading: false,
      type: ItemTypes.GRAPH,
      content: {},
    },
    {
      displayName: 'Funnel Plot',
      functionName: 'funnel',
      loading: false,
      type: ItemTypes.GRAPH,
      content: {},
    },
    {
      displayName: 'Forest Plot',
      functionName: 'forest',
      loading: false,
      type: ItemTypes.GRAPH,
      content: {},
    },
  ],
  // { name: "Mean", type: ItemTypes.SUMMARY },
  // { name: "Regression", type: ItemTypes.METHOD },
  // { name: "Funnel Plot", type: ItemTypes.GRAPH },

  droppedBoxNames: [],
  showForm: null,
  editing: false,
  Analysis: {},
  title: null,
};

const analysisEditPage = (state = initialState, action) => {
  let blocks;
  switch (action.type) {
    case GET_COMPUTATION_START:
      blocks = state.Analysis.data.blocks.slice();
      blocks[action.data].loading = true;
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...blocks.slice(0, action.data),
              blocks[action.data],
              ...blocks.slice(action.data + 1),
            ],
          },
        },
      };
    case GET_COMPUTATION_ERROR:
      blocks = state.Analysis.data.blocks.slice();
      blocks[action.data].loading = false;
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...blocks.slice(0, action.data),
              blocks[action.data],
              ...blocks.slice(action.data + 1),
            ],
          },
        },
      };
    case ADD_TEXT:
      let {index, textContent} = action.data;
      //don't allow empty submissions
      if (textContent === undefined) return {...state};
      //takes care of initial submission
      if (index === undefined) {
        index = 0;
      }
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...state.Analysis.data.blocks.slice(0, index),
              {textContent: textContent, type: 'text'},
              ...state.Analysis.data.blocks.slice(index),
            ],
          },
        },
      };
    case HANDLE_DROPPING:
      // console.log(action)
      let indexOfElement = action.data.index;
      //takes care of initial submission
      if (indexOfElement === undefined) {
        indexOfElement = 0;
      }
      let indexOfDroppedDustbin = action.data.index2;
      let {name} = action.data.item;
      let dustbinsUpdated = state.dustbins.map((dustbin, index) => {
        if (index === indexOfDroppedDustbin) {
          return Object.assign({}, dustbin, {
            lastDroppedItem: action.data.item,
          });
        } else {
          return dustbin;
        }
      });
      return {
        ...state,
        dustbins: dustbinsUpdated,
        droppedBoxNames: [...state.droppedBoxNames, [name]],
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...state.Analysis.data.blocks.slice(0, indexOfElement),
              action.data.item,
              ...state.Analysis.data.blocks.slice(indexOfElement),
            ],
          },
        },
      };
    case SHOW_FORM:
      return {
        ...state,
        showForm: action.data,
      };
    case EDIT_ELEMENT:
      return {
        ...state,
        editing: true,
      };
    case SAVE_ELEMENT:
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...state.Analysis.data.blocks.slice(0, action.data.index),
              {textContent: action.data.textContent, type: 'text'},
              ...state.Analysis.data.blocks.slice(action.data.index + 1),
            ],
          },
        },
        editing: false,
      };
    case 'SET_ANALYSIS_EDIT':
      return {
        ...state,
        Analysis: action.data,
        isFetching: false,
      };
    case LOAD_DOCUMENT:
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [...state.Analysis.data.blocks, ...action.data.blocks],
          },
        },
        title: action.data.header.title,
      };
    case UPDATE_ANALYSIS:
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: state.Analysis.data.blocks,
          },
        },
      };
    case SAVE_DOCUMENT:
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: state.Analysis.data.blocks,
          },
        },
      };
    case DELETE_ELEMENT:
      // console.log("SHOWING DATA", action.data);
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...state.Analysis.data.blocks.slice(0, action.data),
              ...state.Analysis.data.blocks.slice(action.data + 1),
            ],
          },
        },
      };
    case UPDATE_LOC:
      // console.log(state.Analysis.data.blocks)
      // console.log(action.data);
      //we are manipulating state in place here. we need to create a new object at that index
      // blocks = state.Analysis.data.blocks.slice();
      // blocks[action.data.moduleIdx].content = Object.assign(
      //   {},
      //   blocks[action.data.moduleIdx].content
      // );
      // blocks[action.data.moduleIdx].content.outputLoc = action.data.updatedLoc;
      // blocks[action.data.moduleIdx].loading = false;

      // let blocksUpdate = state.Analysis.data.blocks.slice(0);
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: state.Analysis.data.blocks
              .slice(0, action.data.moduleIdx)
              .concat([
                {
                  ...state.Analysis.data.blocks[action.data.moduleIdx],
                  content: {
                    ...state.Analysis.data.blocks[action.data.moduleIdx]
                      .content,
                    outputLoc: action.data.updatedLoc,
                  },
                  loading: false,
                },
              ])
              .concat(
                ...state.Analysis.data.blocks.slice(action.data.moduleIdx + 1),
              ),
          },
        },
      };
    case REMOVE_STUDY:
      blocks = state.Analysis.data.blocks.slice();
      blocks[action.data.moduleIdx].content.studies[
        action.data.studyIdx
      ].active = false;
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...blocks.slice(0, action.data.moduleIdx),
              blocks[action.data.moduleIdx],
              ...blocks.slice(action.data.moduleIdx + 1),
            ],
          },
        },
      };
    case ADD_STUDY:
      blocks = state.Analysis.data.blocks.slice();
      blocks[action.data.moduleIdx].content.studies[
        action.data.studyIdx
      ].active = true;
      return {
        ...state,
        Analysis: {
          ...state.Analysis,
          data: {
            ...state.Analysis.data,
            blocks: [
              ...blocks.slice(0, action.data.moduleIdx),
              blocks[action.data.moduleIdx],
              ...blocks.slice(action.data.moduleIdx + 1),
            ],
          },
        },
      };
    default:
      return state;
  }
};

export default analysisEditPage;
