import React, { Component } from "react";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses, getUser } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    ...state,
    // user: state.MyAnalysesPage.user,
    _id: ownProps.match.params.user_id,
    _token: state.Token.token,
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
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(MyAnalyses)
);

export default MyAnalysesContainer;
