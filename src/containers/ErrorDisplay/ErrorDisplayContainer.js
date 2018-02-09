import {connect} from 'react-redux';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';

const mapStateToProps = (state, ownProps) => {
  let displayErrors = state.errors.[ownProps.section] || {};
  displayErrors = state.errors[ownProps.section][ownProps.form]
  return {
    current: state.errors[ownProps.section][ownProps.form]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendError: message => dispatch(sendError(message))
  }
}

