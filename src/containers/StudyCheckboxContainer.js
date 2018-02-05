import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StudyCheckBox from '../components/StudyCheckBox.js';

// optional
import serialize from 'form-serialize';

let StudyCheckBoxContainer = () => {
  return (

  )
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

StudyCheckBoxContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StudyCheckBox)
);

export default StudyCheckBoxContainer;
