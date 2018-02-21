import {connect} from 'react-redux';
import SaveButton from '../../components/CollectionEditor/SaveButton';
import {
  setFetch,
  clear,
  changeButton,
  setOpen,
} from '../../actions/collectionEdit';
import {getCollection} from '../../lib/apiHelpers.js';
// import {addCollection} from '../../actions/Dashboard';
import serialize from 'form-serialize';
import axios from 'axios';
import root from '../../lib/root';

const mapStateToProps = state => {
  let analysisArray = state.routeProps.search
    ? state.routeProps.search.split('=')
    : [null];
  // console.log(analysisArray);
  let analysisId = analysisArray[analysisArray.length - 1];
  let destination = analysisId
    ? `/analysis/${analysisId}`
    : `/collections/${state.routeProps.params.id}`;
  return {
    isFetching: state.collectionEdit.varObj.isFetching,
    persisted: state.collectionEdit.persisted,
    ownerId: state.sessionInfo.user._id,
    endOfItAll: () => state.routeProps.history.push(destination),
    collectionId: state.routeProps.params.id,
    analysisId: analysisId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCategory: n => dispatch(changeButton(n)),
    clear: () => dispatch(clear()),
    onClose: () => dispatch(setOpen(false)),
    saveCollection: (
      collectionId,
      analysisId,
      ownerId,
      persisted,
      data
    ) => {
      let putString = `${root()}/api/collections/${collectionId}`;
      // if (analysisId) console.log(analysisId);
      dispatch(setFetch(true));
      let collectionModel = {
        name: data.name,
        description: data.description,
        ownerId: ownerId,
        studies: persisted
      }
      axios
        .put(putString, collectionModel)
        .then(response => {
          // console.log(response.data);
          // if (typeof response.data === 'object') {
            // dispatch(addCollection(response.data));
          // }
          getCollection(response.data._id, dispatch);
          dispatch(setFetch(false));
          return {
            ownerId,
            collectionId,
            analysisId,
          };
        })
        .then(returnObject => {
          // console.log(returnObject);
          if (returnObject.analysisId) {
            let putObject = {
              ownerId: returnObject.ownerId,
              data: {
                inclusion: {
                  collectionId: returnObject.collectionId,
                },
              },
            };
            let analysisString = `${root()}/api/analyses/${
              returnObject.analysisId
            }`;
            axios
              .put(analysisString, putObject)
              .then(response => {
                // console.log(response);
                // console.log(response.data);
              })
              .catch(err => console.error(err));
          }
        })
        .catch(err => console.error(err));
    },
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  return {
    isFetching: stateProps.isFetching,
    onSave: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      dispatchProps.saveCollection(
        stateProps.collectionId,
        stateProps.analysisId,
        stateProps.ownerId,
        stateProps.persisted,
        data
      )
      dispatchProps.clear();
      stateProps.endOfItAll();
    },
  };
};

const SaveButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(SaveButton);

export default SaveButtonContainer;
