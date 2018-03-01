// import React, { Component } from "react";
import { connect } from "react-redux";
import ProfilePage from "components/Pages/Profile/ProfilePage";
import { getUserFor } from "lib/apiHelpers";
import { getAnalyses } from "actions/MyAnalysesPage";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    ...state,
    _token: state.session.token,
    // Analyses: state.ProfilePage.analyses,
    user: state.session.user,
    isFetching: state.MyAnalysesPage.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      getUserFor("SESSION", id, dispatch);
    },
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(ProfilePage)
);

export default MyAnalysesContainer;
