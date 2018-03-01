import {connect} from 'react-redux';
import ResultsDisplay from 'components/Pages/CollectionEdit/ResultsDisplay';
import {changePersist} from 'actions/CollectionEditPage';
// import root from 'lib/root';

const mapStateToProps = state => {
  return {
    persisted: state.CollectionEditPage.persisted,
    results: state.CollectionEditPage.results.slice((state.CollectionEditPage.varObj.page - 1) * 10, 10 * state.CollectionEditPage.varObj.page),
    isFetching: state.CollectionEditPage.varObj.isFetching,
    activePage: state.CollectionEditPage.varObj.page,
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
