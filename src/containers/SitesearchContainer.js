import React, { Component } from "react";
import { connect } from "react-redux";
import Sitesearch from "../components/Sitesearch/Sitesearch";
import { getUsers, getAnalyses } from "../actions/sitesearch";
import { withRouter } from "react-router";
import serialize from "form-serialize";

function mapStateToProps(state, ownProps) {
  return {
    query: state.sitesearch.query,
    results: state.sitesearch.results
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    handleSubmit: e => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log("DATA FROM ACTION", data);
      dispatch(getAnalyses(data));
      form.reset();
    }
    // onChange: e => {
    //   e.preventDefault();
    //   console.log(e.target.value);
    //   dispatch(getAnalyses(e.target.value));
    // },
    // onClick: e => {
    //   // Don't reload the page
    //   e.preventDefault();
    //   // Pass in the filter for that link to set it in the store
    //   //dispatch(setAvailabilityFilter(ownProps.filter));
    // }
  };
};

const SitesearchContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Sitesearch)
);

export default SitesearchContainer;
