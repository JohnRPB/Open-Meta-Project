import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StudyCheckbox from '../components/Modules/StudyCheckbox.js';

// optional
import serialize from 'form-serialize';

import * as Actions from '../actions'
import { bindActionCreators } from 'redux';

//let StudyCheckboxContainer = () => {
  //return (

  //)
//}

const mapStateToProps = (state, ownProps) => {
  return {
    checked: state.
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    study: ownProps.study,
    handleClick: async (e) => {
      console.log("e.target: ", e.target);
      console.log("e.target.checked: ", e.target.checked);

      dispatch(
        Actions.updateSingleStudy(
          e.target.checked,
          e.target.name
        )
      )
    }
  }
}

StudyCheckboxContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StudyCheckbox)
);

export default StudyCheckboxContainer;
