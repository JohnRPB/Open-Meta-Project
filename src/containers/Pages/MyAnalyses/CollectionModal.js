import React, {Component} from 'react';
import {connect} from 'react-redux';
import CollectionModal from 'components/MyAnalyses/CollectionModal';
import {withRouter} from 'react-router';

function mapStateToProps(state, ownProps) {
  return {
    userId: ownProps.id,
    _id: state.session.id,
    _token: state.session.token,
  };
}

const CollectionModalContainer = withRouter(
  connect(mapStateToProps, null)(CollectionModal),
);

export default CollectionModalContainer;
