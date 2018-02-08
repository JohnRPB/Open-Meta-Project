import React, { Component } from "react";
import { connect } from "react-redux";
import AnalysisModal from "../components/MyAnalyses/AnalysisModal";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    ...state,
    _id: state.Token.id,
    _token: state.Token.token
  };
}

const AnalysisModalContainer = withRouter(
  connect(mapStateToProps, null)(AnalysisModal)
);

export default AnalysisModalContainer;
