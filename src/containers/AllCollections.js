import React, { Component } from "react";
import { connect } from "react-redux";
import AllCollections from "../components/MyAnalyses/AllCollections";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    ...state
    // MyCollections: state.MyCollectionsPage.Collections,
    // isFetching: state.MyCollectionsPage.isFetching
  };
}

const AllCollectionsContainer = withRouter(
  connect(mapStateToProps, null)(AllCollections)
);

export default AllCollectionsContainer;
