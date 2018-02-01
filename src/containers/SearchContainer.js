import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../components/Search/Search";
import { getAnalyses } from "../actions/MyAnalyses";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    //pages: state.search.pages
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getPages: id => {
      dispatch(getAnalyses(id));
    }
  };
};

const SearchContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Search)
);

export default SearchContainer;
