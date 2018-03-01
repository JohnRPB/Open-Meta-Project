import { addToken, addId } from "../../actions/session";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { getUserFor } from '../../lib/apiHelpers.js';

import UserForm from "../../components/Login/UserForm"; //component inside of login

function mapStateToProps(state) {
  return {
    _token: state.session.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _addToken: token => {
      dispatch(addToken(token));
    },
    _addId: id => {
      dispatch(addId(id));
    },
    userFromId: id => {
      getUserFor("SESSION", id, dispatch);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
