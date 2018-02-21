import {connect} from 'react-redux';
import ResultsDisplay from '../../components/CollectionEditor/ResultsDisplay';
import {changePersist} from '../../actions/collectionEdit';
// import root from '../../lib/root';

const mapStateToProps = state => {
  return {
    persisted: state.collectionEdit.persisted,
    results: state.collectionEdit.results.slice((state.collectionEdit.varObj.page - 1) * 10, 10 * state.collectionEdit.varObj.page),
    isFetching: state.collectionEdit.varObj.isFetching,
    activePage: state.collectionEdit.varObj.page,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStudyStatus: (id, persist, index) => {
      dispatch(changePersist(id, persist, index));
    },
  };
};

const ResultsDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(
  ResultsDisplay,
);

export default ResultsDisplayContainer;
