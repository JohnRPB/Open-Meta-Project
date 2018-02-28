import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import {withRouter} from "react-router";

import SelectCollectionPage from "../../../components/Pages/SelectCollection/SelectCollectionPage";

function mapStateToProps(state) {
  return {
    _selectedCollection: state.SelectCollectionPage.id,
    _id: state.session.user._id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //to be added
  };
}

const SelectCollectionPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SelectCollectionPage)
);

export default SelectCollectionPageContainer;
