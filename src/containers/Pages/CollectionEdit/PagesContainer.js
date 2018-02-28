import {connect} from 'react-redux';
import Pages from '../../../components/Pages/CollectionEdit/Pages';
import {setPage} from '../../../actions/CollectionEditPage';

const mapStateToProps = state => {
  return {
    activePage: state.CollectionEditPage.varObj.page,
    totalPages: Math.ceil(state.CollectionEditPage.results.length / 10)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pageChange: (e,data) => {
      // console.log(data)
      dispatch(setPage(data.activePage));
    }
  }
}

const PagesContainer = connect(mapStateToProps, mapDispatchToProps)(
  Pages,
);

export default PagesContainer;

