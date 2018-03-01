import { connect } from "react-redux";
import AnalysisDisplayPage from "../../components/Pages/AnalysisDisplay/AnalysisDisplayPage";
import { getAnalysis } from "../../actions/AnalysisDisplayPage";
import { getAnalysisFor } from "../../lib/apiHelpers";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  // console.log('hello from container');
  return {
    Analysis: state.AnalysisDisplayPage.Analysis,
    token: state.session.token,
    isFetching: state.AnalysisDisplayPage.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalysis: id => {
      getAnalysisFor("DISPLAY", id, dispatch);
      //dispatch(getAnalysis(id));
    }
  };
};

const AnalysisDisplayPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(AnalysisDisplayPage)
);

export default AnalysisDisplayPageContainer;
