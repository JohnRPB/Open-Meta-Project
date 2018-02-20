import { connect } from "react-redux";
import Routes from "./routes";

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.Token.token,
  }
}

const RouterContainer = connect(mapStateToProps)(Routes)

export default RouterContainer

