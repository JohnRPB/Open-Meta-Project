import {connect} from 'react-redux';
import CollectionEditor from '../../components/CollectionEditor/CollectionEditor';
import {
  setFetch,
  persistAll,
  newResults,
  clear,
  setCurrentCollection,
} from '../../actions/collectionEdit';
import axios from 'axios';
import root from '../../lib/root';

const mapStateToProps = state => {
  // console.log(state.collectionEdit);
  return {
    collectionId: state.routeProps.params.id,
    currentCollection: state.collectionEdit.current,
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

const CollectionEditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(CollectionEditor);

export default CollectionEditorContainer;
