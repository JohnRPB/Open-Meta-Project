import {connect} from 'react-redux';
import CollectionEdit from '../../../components/Pages/CollectionEdit/CollectionEditPage';
import {
  setFetch,
  persistAll,
  newResults,
  clear,
  setCurrentCollection,
} from '../../../actions/CollectionEditPage';
import axios from 'axios';
import root from '../../../lib/root';
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  // console.log(state.CollectionEditPage);
  return {
    collectionId: ownProps.match.params.id,
    currentCollection: state.CollectionEditPage.current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQueryCollection: collectionId => {
      let getString = `${root()}/api/collections/${collectionId}`;
      dispatch(setFetch(true));
      dispatch(clear());
      axios
        .get(getString)
        .then(response => {
          dispatch(setCurrentCollection(response.data));
          dispatch(newResults(response.data.studies));
          dispatch(persistAll());
          dispatch(setFetch(false));
        })
        .catch(err => console.error(err));
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    initCollection: () =>
      dispatchProps.getQueryCollection(stateProps.collectionId),
    currentCollection: stateProps.currentCollection,
  };
};

const CollectionEditContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(CollectionEdit),
);

export default CollectionEditContainer;
