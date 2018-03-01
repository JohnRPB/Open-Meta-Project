import { connect } from "react-redux";
import NewProfile from "components/Pages/Profile/NewProfile";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    _id: state.session.id,
    _token: state.session.token
  };
}

const NewProfileContainer = withRouter(
  connect(mapStateToProps, null)(NewProfile)
);

export default NewProfileContainer;
