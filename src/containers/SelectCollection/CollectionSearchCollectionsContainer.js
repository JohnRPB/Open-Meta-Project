import {connect} from "react-redux";
import CollectionSearchCollections from "../../components/Collections/CollectionsSearchCollections.js";
// import axios from "axios";
// import {newTables} from "../../actions/collections";
// import root from '../../lib/root';

//adding access to frontend url
import {withRouter} from "react-router";

//for the selection of a collection in the select collection page
import {selectCollection} from "../../actions/SelectCollection";


function mapStateToProps(state) {
  // console.log(state);
  return {
    userCollections: state.sessionInfo.user.collections || []
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: e => {
      e.preventDefault();
      // e.target.id
      // console.log("e.target ====>", e.target);
      dispatch(selectCollection(e.target.id));

      // let getString = `${root}/api/studies/ids?studies=${e.target.id}`;
      // axios
      //   .get(getString)
      //   .then(response => dispatch(newTables(response.data)))
      //   .catch(err => console.error(err));
    }
  };
}

const CollectionSearchCollectionsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionSearchCollections)
);

export default CollectionSearchCollectionsContainer;
