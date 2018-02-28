import CollectionSearchForm from "../../components/Pages/Collections/CollectionSearchForm";
import { connect } from "react-redux";
import serialize from "form-serialize";
import axios from "axios";
import {newTables, flipActive, bumpAuthors, resetAuthors} from '../../actions/collections';
// import { withRouter } from "react-router";
import root from '../../lib/root.js';
const mapStateToProps = (state) => {
  return {
    numberOfAuthors: state.collections.authors,
    active: state.collections.active
  }
}

function mapDispatchToProps(dispatch) {
  return {
    flipActive: () => {
      dispatch(flipActive())
    },
    bumpAuthors: () => {
      dispatch(bumpAuthors())
    },
    onSearch: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      let getString = `${root()}/api/studies/search?`;
      Object.keys(data).forEach(key => {
        getString += `&${key}=` + data[key].split(" ").join("_");
      });
      axios
        .get(getString)
        .then(response => dispatch(newTables(response.data)))
        .catch(err => console.error(err));
      form.reset();
    },
    onSubmit: e=> {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      // console.log(data);
      data.study.stats.sampleSize = Number(data.study.stats.sampleSize)
      data.study.stats.testStatVal = Number(data.study.stats.testStatVal)
      data.study.stats.stdErr = Number(data.study.stats.stdErr)
      let getString = `${root()}/api/studies/submit`;
      axios
        .post(getString, data, {'Content-Type': 'application/json'})
        .then(response => {
          form.reset();
          dispatch(resetAuthors());
          dispatch(newTables(response.data));
        })
        .catch(err => console.error(err));
    }
  };
}

const CollectionSearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(CollectionSearchForm);

export default CollectionSearchFormContainer;
