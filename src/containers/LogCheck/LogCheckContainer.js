import { connect } from "react-redux";
import LogCheck from "../../components/LogCheck/LogCheck";

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.Token.token,
    Target: ownProps.Target
  }
}

const LogCheckContainer = connect(mapStateToProps)(LogCheck);

export default LogCheckContainer;
