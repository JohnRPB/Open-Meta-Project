import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../components/Search/Search";
import { getUsers } from "../actions/search";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  return {
    active: []
    //query: state.search.query,
    //results: state.search.results
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    onChange: e => {
      e.preventDefault();
      console.log(e.target.value);
      dispatch(getUsers(e.target.value));
    },
    onClick: e => {
      // Don't reload the page
      e.preventDefault();
      // Pass in the filter for that link to set it in the store
      //dispatch(setAvailabilityFilter(ownProps.filter));
    }
  };
};

const SearchContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Search)
);

export default SearchContainer;
