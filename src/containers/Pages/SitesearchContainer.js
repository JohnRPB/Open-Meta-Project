// import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sitesearch from '../../components/Pages/Sitesearch/SitesearchPage';
import { getUsers, getAnalyses, getCollections } from '../../actions/SiteSearchPage';
import { withRouter } from 'react-router';
// import serialize from 'form-serialize';

function mapStateToProps(state, ownProps) {
  return {
    query: state.SiteSearchPage.query,
    results: state.SiteSearchPage.results,
    field: state.SiteSearchPage.value
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    // handleSubmit: (e, value) => {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   const form = e.target;
    //   console.log('VALUE', value);
    //   const data = serialize(form, { hash: true });
    //   console.log('DATA FROM ACTION', data);
    //   if (value == 'Collection') {
    //     dispatch(getCollections(data, value));
    //   } else if (value == 'User') {
    //     dispatch(getUsers(data, value));
    //   } else {
    //     dispatch(getAnalyses(data, 'Analysis'));
    //   }
    //   form.reset();
    // },
    showResults: (data, field) => {
      // console.log('field', field);
      // console.log('DATA FROM ACTION', data);
      if (field === 'Collection') {
        dispatch(getCollections(data, field));
      } else if (field === 'User') {
        dispatch(getUsers(data, field));
      } else {
        dispatch(getAnalyses(data, 'Analysis'));
      }
    }
  };
};

const SitesearchContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Sitesearch)
);

export default SitesearchContainer;
