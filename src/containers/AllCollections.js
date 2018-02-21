// import React, { Component } from "react";
import { connect } from "react-redux";
import AllCollections from "../components/MyAnalyses/AllCollections";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    user: state.sessionInfo.user,
    isFetching: state.MyAnalysesPage.isFetching
    // MyCollections: state.MyCollectionsPage.Collections,
  };
}

const AllCollectionsContainer = withRouter(
  connect(mapStateToProps, null)(AllCollections)
);

export default AllCollectionsContainer;
