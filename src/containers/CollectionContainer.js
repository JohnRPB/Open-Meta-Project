import { connect } from "react-redux";
import Collection from "../components/Collection/Collection";
import { getCollection } from "../lib/apiHelpers.js";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    Collection: state.sessionInfo.collection,
    isFetching: state.Collection.isFetching,
    Token: state.Token
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getCollection: id => {
      getCollection(id, dispatch);
    }
  };
};

const CollectionContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Collection)
);

export default CollectionContainer;
