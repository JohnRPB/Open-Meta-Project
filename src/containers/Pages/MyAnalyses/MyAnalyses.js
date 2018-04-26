// import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, getUserFor } from 'actions/apiHelpers.js';
import MyAnalyses from "components/Pages/MyAnalyses/MyAnalysesPage";
import { setFetch } from "actions/MyAnalysesPage";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  // console.log(ownProps);
  return {
    // user: state.MyAnalysesPage.user,
    // _id: ownProps.match.params.user_id,
    _id: state.session.id,
    _token: state.session.token,
    currentUser: state.session.user,
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      getUserFor("SESSION", id, dispatch);
    },
    stopFetch: () => {
      dispatch(setFetch(false));
    },
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(MyAnalyses)
);

export default MyAnalysesContainer;
