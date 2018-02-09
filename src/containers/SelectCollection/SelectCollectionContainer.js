import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router";

import SelectCollection from "../../components/SelectCollection";

function mapStateToProps(state) {
  return {
    ...state,
    _selectedCollection: state.SelectCollection.id
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
