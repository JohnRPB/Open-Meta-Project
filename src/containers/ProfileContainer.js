import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile/Profile";
import { getUser } from "../actions/Profile";
import { getAnalyses } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    // User: state.Profile.user,
    Analyses: state.Profile.analyses,
    isFetching: state.Profile.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id));
    },
    getAnalyses: id => {
      dispatch(getAnalyses(id));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Profile)
);

export default MyAnalysesContainer;
