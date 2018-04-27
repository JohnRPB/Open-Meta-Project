// import React, { Component } from "react";
import { connect } from "react-redux";
import AllAnalyses from "components/Pages/MyAnalyses/AllAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    user: state.session.user,
    userDataAvailable: !!state.session.user._id
  };
}

const AllAnalysesContainer = withRouter(
  connect(mapStateToProps, null)(AllAnalyses)
);

export default AllAnalysesContainer;
