import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile/Profile";
import { getUser } from "../actions/Profile";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    User: state.Profile
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id));
    }
  };
};

const MyAnalysesContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Profile)
);

export default MyAnalysesContainer;
