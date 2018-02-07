import {connect} from 'react-redux';
import CollectionSearchCollections from '../../components/Collections/CollectionsSearchCollections.js'
import axios from 'axios';
import {newTables} from '../../actions/collections';
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

function mapStateToProps(state) {
  console.log(state);
  return {
    userCollections: state.Dashboard.user.collections,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: e => {
      e.preventDefault();
      let getString = `${root}/api/studies/ids?studies=${e.target.id}`;
      axios.get(getString)
        .then(response => dispatch(newTables(response.data)))
        .catch(err => console.error(err))

    }
  };
}

const CollectionSearchCollectionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  CollectionSearchCollections,
);

export default CollectionSearchCollectionsContainer;
