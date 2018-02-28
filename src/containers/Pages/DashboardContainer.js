import { connect } from "react-redux";
import Dashboard from "../../components/Pages/Dashboard/Dashboard";
import { getAnalyses, getUser } from "../../actions/Dashboard";
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
    getAnalyses: id => {
      dispatch(getAnalyses(id));
    },
    getUser: id => {
      dispatch(getUser(id));
    }
  };
};

const DashboardContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Dashboard)
);

export default DashboardContainer;
