import * as Actions from '../actions/modules.js';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import TestComp from '../components/TestComp'

function mapStateToProps(state) {
  return {
    results: state.demo.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComp);
