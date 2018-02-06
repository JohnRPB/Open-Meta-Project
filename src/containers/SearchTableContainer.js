import { connect } from "react-redux";
import { ceasePersist, changePage, persistTable } from '../actions/search';
import SearchTable from '../components/Search/SearchTable';
import serialize from "form-serialize";
import axios from 'axios';
const root =
  process.env.NODE_ENV === "production"
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

const mockUser = {
  _id: "5a78bee904e5cd5dd22499d9",
    email: 'Issac.Smith64@hotmail.com',
    passHash: '$2a$08$vj0VMBZ0g1qoFo5tJyfwNutfk4hE/l/kDmyrsBdhrpvHK36TuUVnm',
    profile: 
  { _id: "5a78bee804e5cd5dd2249960",
      fname: 'Ezequiel',
      lname: 'Grimes',
      title: 'District Implementation Officer',
      email: 'Issac.Smith64@hotmail.com',
      organization: 'Smitham - Wunsch',
      background: 'Ratione perferendis omnis. Corporis modi voluptatem laboriosam qui quae architecto voluptas. Aperiam provident animi distinctio. Labore ab quis. Nobis eum repudiandae eos eos libero corporis.',
      image: 'http://lorempixel.com/640/480',
      forkedFromTimes: 20,
      forkedTimes: 46,
  }
}

const mapStateToProps = state => {
  console.log(state);
  return{
    checkedStudy: state.search.persistantTables,
    uncheckedStudy: state.search.newTables,
    activePage: state.search.page,
    user: state.Profile.user
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
      console.log(body);
      axios.post(`${root}/api/collections/new`, body)
        .then(response => {
          // dispatch(response.data);
          console.log(response.data);
        })
        .catch(err => console.error(err));
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log(stateProps, dispatchProps, ownProps);
  return {
    checkedStudy: stateProps.checkedStudy,
    uncheckedStudy: stateProps.uncheckedStudy,
    activePage: stateProps.activePage,
    onClick: dispatchProps.onClick,
    secondClick: dispatchProps.secondClick,
    pageChange: dispatchProps.pageChange,
    onSubmit: e => {
      e.preventDefault();
      let form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data)
      let bodyObj = {
        name: data.collection.name,
        studies: stateProps.checkedStudy.map(study => study.id),
        ownerId: stateProps.user ? stateProps.user._id : mockUser._id,
        comments: [],
        hist: [],
        category: data.category
      }
      console.log(bodyObj)
      dispatchProps.submit(bodyObj)
    }
  }
}

const SearchTableContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchTable);
export default SearchTableContainer
