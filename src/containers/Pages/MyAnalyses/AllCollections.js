// import React, { Component } from "react";
import { connect } from "react-redux";
import AllCollections from "components/Pages/MyAnalyses/AllCollections";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    user: state.session.user,
    userDataAvailable: !!state.session.user._id
  };
}

const AllCollectionsContainer = withRouter(
  connect(mapStateToProps, null)(AllCollections)
);

export default AllCollectionsContainer;
