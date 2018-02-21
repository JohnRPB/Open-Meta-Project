import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import {withRouter} from "react-router";

import SelectCollection from "../../components/SelectCollection";

function mapStateToProps(state) {
  return {
    _selectedCollection: state.SelectCollection.id,
    _id: state.sessionInfo.user._id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //to be added
  };
}

const SelectCollectionContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SelectCollection)
);

export default SelectCollectionContainer;
