import { connect } from "react-redux";
import CollectionDisplayPage from "../../components/Pages/CollectionDisplay/CollectionDisplayPage";
import { getCollection } from "../../lib/apiHelpers.js";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    Collection: state.session.collection,
    isFetching: state.CollectionDisplayPage.isFetching,
    session: state.session
  };
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    getCollection: id => {
      getCollection(id, dispatch);
    }
  };
};

const CollectionDisplayPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchtoProps)(CollectionDisplayPage)
);

export default CollectionDisplayPageContainer;
