// import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Module from '../../components/Modules/Module.js';

// optional

import * as Actions from '../../actions/modules.js';
// import {bindActionCreators} from 'redux';

const mapStateToProps = (state, ownProps) => {
  let correct = 0;
  correct = state.project.showForm ? state.project.showForm : 0;
  correct = correct ? correct : 0
  return {
    block:state.project.blocks[ownProps.moduleIdx],
    correct: correct,
    moduleIdx: ownProps.moduleIdx
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOcpu: async(n) => {
      dispatch(
        Actions.initialUpdate(n),
      );
    },
  };
};

        // Actions.initialUpdate(ownProps.moduleIdx),
const mergeProps = (stateProps, dispatchProps) => {
  return {
    moduleIdx: stateProps.moduleIdx,
    getOcpu: async() => {
      dispatchProps.getOcpu(stateProps.correct);
    }
  }
}
const ModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(Module),
);

export default ModuleContainer;
