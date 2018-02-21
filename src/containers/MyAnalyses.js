// import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from '../lib/apiHelpers.js';
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses, setFetch } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  // console.log(ownProps);
  return {
    // user: state.MyAnalysesPage.user,
    // _id: ownProps.match.params.user_id,
    _id: state.Token.id,
    _token: state.Token.token,
    currentUser: state.sessionInfo.user,
    isFetching: state.MyAnalysesPage.isFetching,
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      getUser(id, dispatch);
    },
    getAnalyses: ids => {
      dispatch(getAnalyses(ids));
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
