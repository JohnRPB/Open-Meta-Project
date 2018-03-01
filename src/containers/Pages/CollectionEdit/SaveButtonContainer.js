import {connect} from 'react-redux';
import SaveButton from '../../../components/Pages/CollectionEdit/SaveButton';
import {
  setFetch,
  clear,
  changeButton,
  setOpen,
} from '../../../actions/CollectionEditPage';
import {getCollection} from '../../../lib/apiHelpers.js';
// import {addCollection} from '../../actions/Dashboard';
import serialize from 'form-serialize';
import axios from 'axios';
import root from '../../../lib/root';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let analysisArray = ownProps.match.search
    ? ownProps.match.search.split('=')
    : [null];
  // console.log(analysisArray);
  let analysisId = analysisArray[analysisArray.length - 1];
  let destination = analysisId
    ? `/analysis/${analysisId}`
    : `/collections/${ownProps.match.params.id}`;
  return {
    isFetching: state.CollectionEditPage.varObj.isFetching,
    persisted: state.CollectionEditPage.persisted,
    ownerId: state.session.user._id,
    endOfItAll: () => ownProps.history.push(destination),
    collectionId: ownProps.match.params.id,
    analysisId: analysisId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCategory: n => dispatch(changeButton(n)),
    clear: () => dispatch(clear()),
    onClose: () => dispatch(setOpen(false)),
    saveCollection: (collectionId, analysisId, ownerId, persisted, data) => {
      let putString = `${root()}/api/collections/${collectionId}`;
      // if (analysisId) console.log(analysisId);
      dispatch(setFetch(true));
      let collectionModel = {
        name: data.name,
        description: data.description,
        ownerId: ownerId,
        studies: persisted,
      };
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
        data,
      );
      dispatchProps.clear();
      stateProps.endOfItAll();
    },
  };
};

const SaveButtonContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(SaveButton),
);

export default SaveButtonContainer;
