import Search from '../components/Search/Search';
import {connect} from 'react-redux';
import serialize from 'form-serialize';
import axios from 'axios';
import {newTables} from '../actions/search';
// import { withRouter } from "react-router";
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      //dispatch things
      let getString = `${root}/api/studies/search?`;
      Object.keys(data).forEach(key => {
        getString += `&${key}=` + data[key].split(' ').join('_');
      });
      axios
        .get(getString)
        .then(response => dispatch(newTables(response.data)))
        .catch(err => console.error(err));
      form.reset();
    },
  };
}

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
