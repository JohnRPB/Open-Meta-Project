import axios from 'axios';
import {store} from '../index.js';

// Remove a study
export const REMOVE_STUDY = 'REMOVE_STUDY';
export const removeStudy = (moduleIdx, studyId) => {
  return {
    type: REMOVE_STUDY,
    data: {moduleIdx, studyId},
  };
};

// Add a study
export const ADD_STUDY = 'ADD_STUDY';
export const addStudy = (moduleIdx, studyId) => {
  return {
    type: ADD_STUDY,
    data: {moduleIdx, studyId},
  };
};

// update module's output location
export const UPDATE_LOC = 'UPDATE_LOC';
export const updateLoc = (updatedLoc) => {
  return {
    type: UPDATE_LOC,
    data: updatedLoc
  }
}

// ---------------------------------------------------------
// Functions to get Ocpu computations 
// 2018-02-02 11:05
// ---------------------------------------------------------


const computeOcpuAndGetImg = async (rootUrl, data) => { 
    // Sends request and waits for it
    let x = [];
    let y = [];
    for (let key in data) {
      x.push(data[key].sampleSize)
      y.push(data[key].testStatVal)
    }

    let postR = await axios({
      method: 'post',
      url: rootUrl,
      x: x,
      y: y
    });

    console.log('------------------- START postR.data -------------------');
    console.log(postR.data);
    console.log('-------------------- END postR.data --------------------');

    // Ocpu returns indented list of URLS; we split it here
    let resultArr = postR.data.split('\n');
    return `https://cloud.opencpu.org${resultArr[4]}/png`;
}

export const UPDATE_SINGLE_STUDY = 'UPDATE_SINGLE_STUDY';
export const updateSingleStudy = async (moduleIdx, studyId, updateType) => {
  return async dispatch => {
    // dispatch study status modification action
    dispatch(
      updateType
        ? addStudy(moduleIdx, studyId)
        : removeStudy(moduleIdx, studyId),
    );

    let moduleContent = store.project.blocks[moduleIdx].content;
    let rootUrl = `http://johnrpb.ocpu.io/openCPU_test/R/${ moduleContent.name }`;

    // make request to Ocpu and fetch img url
    let imgUrl;
    try {
       imgUrl = await computeOcpuAndGetImg(rootUrl, moduleContent.studies);
    } catch(e) {
      console.log("Error with Ocpu request" + e);
    }

    dispatch(updateLoc(imgUrl));
  };
};
