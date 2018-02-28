import { connect } from "react-redux";
import { ceasePersist, changePage, persistTable } from '../../actions/collections';
import { addCollection } from '../../actions/Dashboard';
import root from '../../lib/root';
import CollectionSearchTable from '../../components/Pages/Collections/CollectionSearchTable';
import serialize from "form-serialize";
import axios from 'axios';


const mapStateToProps = state => {
  // console.log(state);
  return{
    checkedStudy: state.collections.persistantTables,
    uncheckedStudy: state.collections.newTables,
    activePage: state.collections.page,
    user: state.Dashboard.user
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
      // console.log(body);
      axios.post(`${root()}/api/collections/new`, body)
        .then(response => {
          // dispatch(response.data);
          // console.log(response.data);
          dispatch(addCollection(response.data));
        })
        .catch(err => console.error(err));
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  // console.log(stateProps, dispatchProps, ownProps);
  return {
    checkedStudy: stateProps.checkedStudy,
    uncheckedStudy: stateProps.uncheckedStudy,
    activePage: stateProps.activePage,
    onClick: dispatchProps.onClick,
    secondClick: dispatchProps.secondClick,
    pageChange: dispatchProps.pageChange,
    onSubmit: e => {
      e.preventDefault();
      let collectionNames = stateProps.user.collections.map(col => col.name);
      let form = e.target;
      const data = serialize(form, { hash: true });
      // console.log(data)
      if(!collectionNames.includes(data.collection.name)){
      let bodyObj = {
        name: data.collection.name,
        studies: stateProps.checkedStudy.map(study => study.id),
        ownerId: stateProps.user._id,
        comments: [],
        hist: [],
        category: data.category
      }
      // console.log(bodyObj)
      dispatchProps.submit(bodyObj)
      }
    }
  }
}

const CollectionSearchTableContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(CollectionSearchTable);
export default CollectionSearchTableContainer
