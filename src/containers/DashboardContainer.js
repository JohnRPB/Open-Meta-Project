import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";
import { getAnalyses } from "../actions/Dashboard";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    DashboardRelated: state.Dashboard.analyses
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalyses: id => {
      dispatch(getAnalyses(id));
    }
  };
};

const DashboardContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Dashboard)
);

export default DashboardContainer;
