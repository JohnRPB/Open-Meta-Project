// import React, { Component } from "react";
import { connect } from "react-redux";
import AllAnalyses from "../components/MyAnalyses/AllAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    user: state.sessionInfo.user,
    isFetching: state.MyAnalysesPage.isFetching
    // MyAnalyses: state.MyAnalysesPage.analyses,
    // isFetching: state.MyAnalysesPage.isFetching
  };
}

const AllAnalysesContainer = withRouter(
  connect(mapStateToProps, null)(AllAnalyses)
);

export default AllAnalysesContainer;
