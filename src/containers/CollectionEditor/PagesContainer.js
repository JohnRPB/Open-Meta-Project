import {connect} from 'react-redux';
import Pages from '../../components/CollectionEditor/Pages';
import {setPage} from '../../actions/collectionEdit';

const mapStateToProps = state => {
  return {
    activePage: state.collectionEdit.varObj.page,
    totalPages: Math.ceil(state.collectionEdit.results.length / 10)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pageChange: (e,data) => {
      console.log(data)
      dispatch(setPage(data.activePage));
    }
  }
}

const PagesContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pages,
);

export default PagesContainer;

