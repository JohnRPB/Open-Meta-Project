// import React, { Component } from "react";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses, getUser, setFetch } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    // user: state.MyAnalysesPage.user,
    // _id: ownProps.match.params.user_id,
    _id: state.Token.id,
    _token: state.Token.token,
    currentUser: state.sessionInfo.user,
    isFetching: state.MyAnalysesPage.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id));
    },
    getAnalyses: ids => {
      dispatch(getAnalyses(ids));
    },
    stopFetch: () => {
      dispatch(setFetch(false));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(MyAnalyses)
);

export default MyAnalysesContainer;
