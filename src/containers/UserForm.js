import { addToken, addId } from "../actions/Token";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserForm from "../components/Login/UserForm"; //component inside of login

function mapStateToProps(state) {
  return {
    _token: state.Token.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _addToken: token => {
      dispatch(addToken(token));
    },
    _addId: id => {
      dispatch(addId(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
