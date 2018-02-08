import {connect} from 'react-redux';
import SearchForm from '../../components/CollectionEditor/SearchForm';
import serialize from 'form-serialize';
import root from '../../lib/root';
import axios from 'axios'
import {setFetch, newResults} from '../../actions/collectionEdit';

const mapStateToProps = state => {
  return {
    isFetching: state.collectionEdit.varObj.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      console.log(data);
      let getString = `${root()}/api/studies/search?`;
      Object.keys(data).forEach(key => {
        getString += `&${key}=` + data[key].split(" ").join("_");
      });
      dispatch(setFetch(true));
      axios
        .get(getString)
        .then(response => {
          dispatch(newResults(response.data));
          dispatch(setFetch(false));
          form.reset();
        })
        .catch(err => console.error(err));
    }
  }
}

const SearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchForm,
);

export default SearchFormContainer;
