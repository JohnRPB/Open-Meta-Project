// import React, { Component } from "react";
import { connect } from "react-redux";
import ProfilePage from "../../../components/Pages/Profile/ProfilePage";
import { getUser } from "../../../actions/ProfilePage";
import { getAnalyses } from "../../../actions/MyAnalysesPage";
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
      dispatch(getUser(id));
    },
    getAnalyses: id => {
      dispatch(getAnalyses(id));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(ProfilePage)
);

export default MyAnalysesContainer;
