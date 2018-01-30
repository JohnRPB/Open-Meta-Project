import * as Actions from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MasterDocument from "../components/Project/MasterDocument";

function mapStateToProps(state) {
  return {
    analyses: state.project.analyses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(event) {
      event.preventDefault();
    },
    handleChange(event) {
    //   this.setState({ value: event.target.value });
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterDocument);
