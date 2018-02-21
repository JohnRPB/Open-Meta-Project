// import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import StudyCheckbox from '../../components/Modules/StudyCheckbox.js';

// optional

import * as Actions from '../../actions/modules.js';
// import {bindActionCreators} from 'redux';

//let StudyCheckboxContainer = () => {
//return (

//)
//}

const mapStateToProps = (state, ownProps) => {
  let currentStudy =
    state.project.blocks[ownProps.moduleIdx].content.studies[
      ownProps.studyIdx
    ];

  return {
    checked: currentStudy.active,
    studyName: currentStudy.name,
    moduleIdx: ownProps.moduleIdx, // passed to container
    studyIdx: ownProps.studyIdx, // passed to container
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: async (e, data) => {
      console.log("data: ", data);
      console.log('e.target: ', e.target);
      console.log('e.target.checked: ', e.target.checked);

      dispatch(
        Actions.updateSingleStudy(
          data.moduleidx,
          data.studyidx,
          data.checked,
        ),
      );
    },
  };
};

const StudyCheckboxContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StudyCheckbox),
);

export default StudyCheckboxContainer;
