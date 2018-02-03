import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OutputPanel from '../../components/Modules/OutputPanel.js';

// optional  
import serialize from 'form-serialize';

//let OutputPanelContainer = () => {
  //return ( 
    
  //)
//}

const mapStateToProps = (state, ownProps) => {
  let currentModule =
    state.project.blocks[ownProps.moduleIdx];
  console.log("ownProps: ", ownProps);
  console.log("state.project.blocks: ", state.project.blocks);

  console.log("------------------- START FUCKING currentModule -------------------");
  console.log(currentModule);
  console.log("-------------------- END currentModule --------------------");

  let outputLoc = currentModule ? currentModule.content.outputLoc : "http://www.sharpsightlabs.com/wp-content/uploads/2014/11/scatterplot-in-r_basic.png";

  

  return {
    outputLoc: outputLoc 
  }
}

//const mapDispatchToProps = (dispatch, ownProps) => {
  //return {

  //}
//}

const OutputPanelContainer = withRouter(
  connect(mapStateToProps, null)(OutputPanel)
);

export default OutputPanelContainer;

