import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StudyCheckbox from '../../components/Modules/StudyCheckbox.js';

// optional

import * as Actions from '../../actions/modules.js';
import {bindActionCreators} from 'redux';

//let StudyCheckboxContainer = () => {
//return (

//)
//}

const mapStateToProps = (state, ownProps) => {
  let currentStudy =
    state.project.blocks[ownProps.moduleIdx].studies[
      ownProps.studyId.toString()
    ];

  return {
    checked: currentStudy.active,
    studyName: currentStudy.name,
    moduleIdx: ownProps.moduleIdx, // passed to container
    studyId: ownProps.studyId, // passed to container
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: async e => {
      console.log('e.target: ', e.target);
      console.log('e.target.checked: ', e.target.checked);

      dispatch(
        Actions.updateSingleStudy(
          e.target.moduleIdx,
          e.target.studyId,
          e.target.checked,
        ),
      );
    },
  };
};

const StudyCheckboxContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StudyCheckbox),
);

export default StudyCheckboxContainer;
