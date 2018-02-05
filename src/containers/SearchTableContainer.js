import { connect } from "react-redux";
import { ceasePersist, changePage, persistTable } from '../actions/search';
import SearchTable from '../components/Search/SearchTable';

const mapStateToProps = state => {
  return{
    checkedStudy: state.search.persistantTables,
    uncheckedStudy: state.search.newTables,
    activePage: state.search.page
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      dispatch(persistTable(e.target.value));
    },
    secondClick: e => {
      e.preventDefault();
      dispatch(ceasePersist(e.target.value));
    },
    pageChange: (e,data) => {
      e.preventDefault();
      dispatch(changePage(data.activePage));
    }
  }
}

const SearchTableContainer = connect(mapStateToProps, mapDispatchToProps)(SearchTable);
export default SearchTableContainer
