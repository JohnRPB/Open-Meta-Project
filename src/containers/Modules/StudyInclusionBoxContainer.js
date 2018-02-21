// import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StudyInclusionBox from '../../components/Modules/StudyInclusionBox';

const mapStateToProps = (state, ownProps) => {
   let currentModule =
    state.project.blocks[ownProps.moduleIdx];
  console.log("------------------- START currentModule -------------------");
  console.log(currentModule);
  console.log("-------------------- END currentModule --------------------");
  

  return {
    studies: currentModule.content.studies
  }
}

//const mapDispatchToProps = (dispatch, ownProps) => {
  //return {

  //}
//}

const StudyInclusionBoxContainer = withRouter(
  connect(mapStateToProps, null)(StudyInclusionBox)
);

export default StudyInclusionBoxContainer;

