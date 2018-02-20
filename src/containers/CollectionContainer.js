import { connect } from "react-redux";
import Collection from "../components/Collection/Collection";
import { getCollection } from "../actions/Collection";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    Collection: state.Collection.Collection,
    isFetching: state.Collection.isFetching,
    Token: state.Token
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getCollection: id => {
      dispatch(getCollection(id));
    }
  };
};

const CollectionContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(Collection)
);

export default CollectionContainer;
