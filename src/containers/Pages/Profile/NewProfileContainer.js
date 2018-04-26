import { connect } from "react-redux";
import NewProfile from "components/Pages/Profile/NewProfile";
import { withRouter } from "react-router";
import { setFetch } from 'actions/MyAnalysesPage.js';

function mapStateToProps(state) {
  return {
    _id: state.session.id,
    _token: state.session.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFetch: () => {
      dispatch(setFetch(false))
    }
  };
}

const NewProfileContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewProfile)
);

export default NewProfileContainer;
