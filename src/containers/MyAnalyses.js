import React, { Component } from "react";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    MyAnalyses: state.MyAnalysesPage.analyses,
    isFetching: state.MyAnalysesPage.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalyses: id => {
      dispatch(getAnalyses(id));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(MyAnalyses)
);

export default MyAnalysesContainer;
