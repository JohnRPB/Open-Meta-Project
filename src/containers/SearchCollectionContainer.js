import Search from '../components/Search/Search';
import {connect} from 'react-redux';
import SearchCollection from '../components/Search/SearchCollection.js';
import axios from 'axios';
import {newTables} from '../actions/search';
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

function mapStateToProps(state) {
  console.log(state);
  return {
    userCollections: [
      {name: 'Collection One', studies: [1, 15, 14]},
      {name: 'Collection Two', studies: [2, 16, 15]},
      {name: 'Collection Three', studies: [3, 17, 16]},
      {name: 'Collection Four', studies: [4, 18, 17]},
      {name: 'Collection Five', studies: [5, 20, 26]},
      {name: 'Collection Six', studies: [8, 21, 36]},
      {name: 'Collection Seven', studies: [14, 20, 43]},
      {name: 'Collection Eight', studies: [34, 26, 28]},
      {name: 'Collection Nine', studies: [7, 21, 36]},
      {name: 'Collection Ten', studies: [2, 34, 36]},
      {name: 'Collection Eleven', studies: [15, 21, 50]},
      {name: 'Collection Twelve', studies: [27, 22, 33]},
      {name: 'Collection Thirteen', studies: [9, 25, 39]},
      {name: 'Collection Fourteen', studies: [7, 19, 37]},
    ],
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick: e => {
      e.preventDefault();
      console.log(e)
      console.log(e.target.id)
      let getString = `${root}/api/studies/ids?studies=${e.target.id}`;
      axios.get(getString)
        .then(response => dispatch(newTables(response.data)))
        .catch(err => console.error(err))

    }
  };
}

const SearchCollectionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SearchCollection,
);

export default SearchCollectionContainer;
