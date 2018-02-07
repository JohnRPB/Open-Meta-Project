import {connect} from 'react-redux';
import ButtonModal from '../../components/CollectionEditor/ButtonModal';
import {setFetch, changeButton, setOpen} from '../../actions/collectionEdit';
import {addCollection} from '../../actions/Dashboard';
import serialize from 'form-serialize';
import axios from 'axios';
import root from '../../lib/root';

const mapStateToProps = state => {
  let analysisArray = state.routeProps.search ? state.routeProps.search.split('=') : [null]
  console.log(analysisArray);
  let analysisId = analysisArray[analysisArray.length - 1]
  let destination = analysisId ? `/analysis/${analysisId}/edit` : `/collections/${state.routeProps.params.id}`
  return {
    open: state.collectionEdit.varObj.open,
    categories: state.collectionEdit.varObj.buttons,
    isFetching: state.collectionEdit.varObj.isFetching,
    persisted: state.collectionEdit.persisted,
    ownerId: state.Dashboard.user._id,
    endOfItAll: ()=> state.routeProps.history.push(destination),
    collectionId: state.routeProps.params.id,
    analysisId: analysisId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCategory: n => dispatch(changeButton(n)),
    onClose: () => dispatch(setOpen(false)),
    saveCollection: (
      collectionId,
      analysisId,
      name,
      persisted,
      ownerId,
      description,
    ) => {
      let putString = `${root()}/api/collections/${collectionId}`;
      let collectionBody = {
        name: name,
        studies: persisted,
        ownerId: ownerId,
        description: description,
        comments: [],
        category: [],
      };
      console.log(collectionBody);
      if (analysisId) console.log(analysisId);
      dispatch(setFetch(true));
      axios
        .put(putString, collectionBody)
        .then(response => {
          if (typeof response.data == 'object') {
            dispatch(addCollection(response.data));
          }
          dispatch(setFetch(false));
          dispatch(setOpen(false));
          return {
            ownerId,
            collectionId,
            analysisId,
          };
        })
        .then(returnObject => {
          console.log(returnObject);
          if(returnObject.analysisId){
            let putObject = {
              ownerId: returnObject.ownerId,
              data: {
                header: {
                  title: 'Placeholder Title'
                },
                inclusion: {
                  collectionId: returnObject.collectionId,
                },
              },
            }
            let analysisString = `${root()}/api/analyses/${returnObject.analysisId}`;
            axios.put(analysisString, putObject)
              .then(response => {
                console.log(response)
                console.log(response.data)
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
    open: stateProps.open,
    categories: stateProps.categories,
    isFetching: stateProps.isFetching,
    changeCategory: dispatchProps.changeCategory,
    onClose: dispatchProps.onClose,
    onSave: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      dispatchProps.saveCollection(
        stateProps.collectionId,
        stateProps.analysisId,
        data.collection.name,
        stateProps.persisted,
        stateProps.ownerId,
        data.description,
      );
      stateProps.endOfItAll();
    },
  };
};

const ButtonModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(ButtonModal);

export default ButtonModalContainer;
