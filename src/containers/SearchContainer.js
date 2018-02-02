import Search from "../components/Search/Search";
import { connect } from "react-redux";
import serialize from "form-serialize";
import axios from "axios";
// import { withRouter } from "react-router";

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      //dispatch things
      let getString = "http://localhost:8000/api/studies/search?";
      Object.keys(data).forEach(key => {
        getString += `&${key}=` + data[key].split(" ").join("_");
      });
      axios
        .get(getString)
        .then(response => console.log(response))
        .catch(err => console.error(err));
      form.reset();
    }
  };
}

const SearchContainer = connect(null, mapDispatchToProps)(Search);

export default SearchContainer;
