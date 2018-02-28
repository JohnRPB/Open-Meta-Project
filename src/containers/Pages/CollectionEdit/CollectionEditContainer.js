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

const mapStateToProps = state => {
  // console.log(state.CollectionEditPage);
  return {
    collectionId: state.routeProps.params.id,
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
    currentCollection: stateProps.currentCollection
  };
};

const CollectionEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(CollectionEdit);

export default CollectionEditContainer;
