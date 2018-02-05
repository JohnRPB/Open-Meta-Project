import {addToken} from '../actions/Token'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import UserForm from '../components/Login/UserForm' //component inside of login

function mapStateToProps(state) {
  return {
    _token: state.Token.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _addToken: (token) => {
      dispatch(addToken(token));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);