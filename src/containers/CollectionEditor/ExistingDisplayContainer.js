import {connect} from 'react-redux';
import ExistingDisplay from '../../components/CollectionEditor/ExistingDisplay';
import serialize from 'form-serialize';
import root from '../../lib/root';
import {newResults} from '../../actions/collectionEdit'
import axios from 'axios';

const mapStateToProps = state => {
  return {
    existingCollections: state.Dashboard.user.collections,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      const form = e.target;
      console.log(e.target)
      const data = serialize(form, {hash: true});
      let getString = `${root()}/api/studies/ids?studies=${e.target.id}`;
      axios
        .get(getString)
        .then(response => dispatch(newResults(response.data)))
        .catch(err => console.error(err));
    },
  };
};

const ExistingDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(
  ExistingDisplay,
);

export default ExistingDisplayContainer;
