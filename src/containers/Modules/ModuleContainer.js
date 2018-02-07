import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Module from '../../components/Modules/Module.js';

// optional

import * as Actions from '../../actions/modules.js';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getOcpu: async () => {
      dispatch(
        Actions.initialUpdate(ownProps.moduleIdx),
      );
    },
  };
};

const ModuleContainer = withRouter(
  connect(null, mapDispatchToProps)(Module),
);

export default ModuleContainer;
