<<<<<<< HEAD
import Search from '../components/Search/Search';
import {connect} from 'react-redux';
import serialize from 'form-serialize';
import axios from 'axios';
import {newTables} from '../actions/search';
=======
import Search from "../components/Search/Search";
import { connect } from "react-redux";
import serialize from "form-serialize";
import axios from "axios";
>>>>>>> master
// import { withRouter } from "react-router";

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
<<<<<<< HEAD
      const data = serialize(form, {hash: true});
=======
      const data = serialize(form, { hash: true });
      console.log(data);
>>>>>>> master
      //dispatch things
      let getString = "http://localhost:8000/api/studies/search?";
      Object.keys(data).forEach(key => {
        getString += `&${key}=` + data[key].split(" ").join("_");
      });
      axios
        .get(getString)
        .then(response => dispatch(newTables(response.data)))
        .catch(err => console.error(err));
      form.reset();
    }
  };
}

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
