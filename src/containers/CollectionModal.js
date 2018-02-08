import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionModal from "../components/MyAnalyses/CollectionModal";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  return {
    ...state,
    userId: ownProps.id,
    _id: state.Token.id,
    _token: state.Token.token
  };
}

const CollectionModalContainer = withRouter(
  connect(mapStateToProps, null)(CollectionModal)
);

export default CollectionModalContainer;
