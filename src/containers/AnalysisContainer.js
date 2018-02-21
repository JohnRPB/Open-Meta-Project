import { connect } from "react-redux";
import Analysis from "../components/Analysis/Analysis";
import { getAnalysis } from "../actions/Analysis";
import { withRouter } from "react-router";

function mapStateToProps(state, ownProps) {
  // console.log('hello from container');
  return {
    Analysis: state.Analysis.Analysis,
    token: state.Token.token,
    isFetching: state.Analysis.isFetching
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getAnalysis: id => {
      dispatch(getAnalysis(id));
    }
  };
};

const AnalysisContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Analysis)
);

export default AnalysisContainer;
