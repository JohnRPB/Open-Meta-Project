import * as Actions from "../actions/MyAnalyses";
import { connect } from "react-redux";
import MyAnalyses from "../components/MyAnalyses";

// function mapStateToProps(state) {
//   return {
//
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAnalyses);
