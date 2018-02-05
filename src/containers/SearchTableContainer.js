import { connect } from "react-redux";
import { persistTable } from '../actions/search';
import SearchTable from '../components/Search/SearchTable';

const mapStateToProps = state => {
  return{
    checkedStudy: state.search.persistantTables,
    uncheckedStudy: state.search.newTables
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClick: (e, data) => {
      e.preventDefault();
      console.log(e.target);
      console.log(e);
      dispatch(persistTable(e.target.value));
    }
  }
}

const SearchTableContainer = connect(mapStateToProps, mapDispatchToProps)(SearchTable);
export default SearchTableContainer
