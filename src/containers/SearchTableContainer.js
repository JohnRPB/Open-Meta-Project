import { connect } from "react-redux";
import { ceasePersist, changePage, persistTable } from '../actions/search';
import SearchTable from '../components/Search/SearchTable';
import serialize from "form-serialize";
import axios from 'axios';

const mapStateToProps = state => {
  console.log(state);
  return{
    checkedStudy: state.search.persistantTables,
    uncheckedStudy: state.search.newTables,
    activePage: state.search.page,
    user: state.Profile.user
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
    },
    submit: (body) => {
      axios.post('url', body)
        .then(response => {
          dispatch(response.data);
        });
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log(stateProps, dispatchProps, ownProps);
  return {
    checkedStudy: stateProps.checkedStudy,
    uncheckedStudy: stateProps.uncheckedStudy,
    activePage: stateProps.activePage,
    onClick: dispatchProps.onClick,
    secondClick: dispatchProps.secondClick,
    pageChange: dispatchProps.pageChange,
    onSubmit: e => {
      e.preventDefault();
      let form = e.target;
      const data = serialize(form, { hash: true });
      let bodyObj = {
        name: form.collection.name,
        studies: stateProps.checkedStudy,
        ownerId: stateProps.user.id,
        comments: [],
        hist: [],
        category: form.category
      }
      dispatchProps.submit(bodyObj)
    }
  }
}

const SearchTableContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchTable);
export default SearchTableContainer
