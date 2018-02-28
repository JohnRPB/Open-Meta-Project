import { connect } from "react-redux";
import Routes from "./Routes";

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.session.token,
  }
}

const RoutesContainer = connect(mapStateToProps)(Routes)

export default RoutesContainer

