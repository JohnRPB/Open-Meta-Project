import { connect } from "react-redux";
import NewProfile from "../components/Profile/NewProfile";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    _id: state.Token.id,
    _token: state.Token.token
  };
}

const NewProfileContainer = withRouter(
  connect(mapStateToProps, null)(NewProfile)
);

export default NewProfileContainer;
