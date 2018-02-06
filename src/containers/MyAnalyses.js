import React, { Component } from "react";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses/MyAnalyses";
import { getAnalyses, getUser } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    ...state,
    // user: state.MyAnalysesPage.user,
    _id: state.Token.id,
    _token: state.Token.token,
    isFetching: state.MyAnalysesPage.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalyses: id => {
      console.log("inside actions");
      dispatch(getAnalyses(id));
    },
    getUser: id => {
      dispatch(getUser(id));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(MyAnalyses)
);

export default MyAnalysesContainer;
