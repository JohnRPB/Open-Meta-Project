import {connect} from "react-redux";
import CollectionSearchCollections from "../../components/Collections/CollectionsSearchCollections.js";
import axios from "axios";
import {newTables} from "../../actions/collections";

//adding access to frontend url
import {withRouter} from "react-router";

//for the selection of a collection in the select collection page
import {selectCollection} from "../../actions/SelectCollection";

const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

function mapStateToProps(state) {
  console.log(state);
  return {
    userCollections: state.Dashboard.user.collections
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: e => {
      e.preventDefault();
      // e.target.id
      console.log("e.target ====>", e.target);
      dispatch(selectCollection(e.target.id));

      let getString = `${root}/api/collections/${e.target.id}`;
      axios
        .get(getString)
        .then(response => dispatch(newTables(response.data.studies)))
        .catch(err => console.error(err));
    }
  };
}

const CollectionSearchCollectionsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CollectionSearchCollections)
);

export default CollectionSearchCollectionsContainer;
