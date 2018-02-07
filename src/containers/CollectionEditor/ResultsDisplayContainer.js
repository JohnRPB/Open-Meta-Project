import {connect} from 'react-redux';
import ResultsDisplay from '../../components/CollectionEditor/ResultsDisplay';
import {changePersist, setOpen} from '../../actions/collectionEdit';
import root from '../../lib/root';

const mapStateToProps = state => {
  return {
    persisted: state.collectionEdit.persisted,
    results: state.collectionEdit.results,
    isFetching: state.collectionEdit.varObj.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStudyStatus: (id, persist, index) => {
      dispatch(changePersist(id, persist, index));
    },
    setOpen: bool => dispatch(setOpen(bool))
  };
};

const ResultsDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(
  ResultsDisplay,
);

export default ResultsDisplayContainer;
