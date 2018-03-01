import { connect } from "react-redux";
import Dashboard from "../../components/Pages/Dashboard/DashboardPage";
import { getUserFor } from "../../lib/apiHelpers";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    _id: state.session.id,
    _token: state.session.token,
    DashboardRelated: state.Dashboard.analyses,
    isFetching: state.Dashboard.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUserFor("SESSION", id, dispatch));
    }
  };
};

const DashboardContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Dashboard)
);

export default DashboardContainer;
