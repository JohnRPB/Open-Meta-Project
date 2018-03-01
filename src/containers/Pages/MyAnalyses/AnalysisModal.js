import React, { Component } from "react";
import { connect } from "react-redux";
import AnalysisModal from "components/MyAnalyses/AnalysisModal";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    _id: state.session.id,
    _token: state.session.token
  };
}

const AnalysisModalContainer = withRouter(
  connect(mapStateToProps, null)(AnalysisModal)
);

export default AnalysisModalContainer;
