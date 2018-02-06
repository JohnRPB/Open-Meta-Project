import React, { Component } from "react";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    ...state,
    _token: state.Token.token
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalyses: id => {
      console.log("inside actions");
      dispatch(getAnalyses(id));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(MyAnalyses)
);

export default MyAnalysesContainer;
