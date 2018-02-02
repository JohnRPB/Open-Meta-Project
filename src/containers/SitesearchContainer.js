import React, { Component } from "react";
import { connect } from "react-redux";
import Sitesearch from "../components/Sitesearch/Sitesearch";
import { getUsers, getAnalyses, getCollections } from "../actions/sitesearch";
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
    handleSubmit: (e, value) => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target;
      console.log("VALUE", value);
      const data = serialize(form, { hash: true });
      console.log("DATA FROM ACTION", data);
      if (value === "Collection") {
        dispatch(getCollections(data));
      } else if (value === "User") {
        dispatch(getUsers(data));
      } else {
        dispatch(getAnalyses(data));
      }
      //form.reset();
    }
  };
};

const SitesearchContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Sitesearch)
);

export default SitesearchContainer;
