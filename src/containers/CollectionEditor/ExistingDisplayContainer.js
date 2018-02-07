import {connect} from 'react-redux';
import ExistingDisplay from '../../components/CollectionEditor/ExistingDisplay';
import serialize from 'form-serialize';
import root from '../../lib/root';

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
      const data = serialize(form, {hash: true});
      console.log(e.target.value);
    },
  };
};

const ExistingDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(
  ExistingDisplay,
);

export default ExistingDisplayContainer;
