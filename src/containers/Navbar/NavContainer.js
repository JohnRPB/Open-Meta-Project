// import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "components/Navbar/Nav";
// import {
  // getUsers,
  // getAnalyses,
  // getCollections,
  // redirectSubmission
// } from "actions/SiteSearchPage";
import { withRouter } from "react-router";
// import serialize from "form-serialize";
// import { push } from "react-router-redux";

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: !!state.session.token
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    // submission: () => {
    //   dispatch(redirectSubmission());
    // },
    // handleSubmit: (e, value) => {
    //   e.preventDefault();
    //   //e.stopPropagation();
    //   const form = e.target;
    //   console.log("VALUE", value);
    //   const data = serialize(form, { hash: true });
    //   console.log("DATA FROM ACTION", data);
    //   dispatch(getAnalyses(data, "Analysis"));
    //   //form.reset();
    // }
  };
};

const NavContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Nav)
);

export default NavContainer;
