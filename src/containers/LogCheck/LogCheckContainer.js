import { connect } from "react-redux";
import LogCheck from "../../components/LogCheck/LogCheck";
import { setHistory, setLocation, setMatch, setParams, setSearch } from "../../actions/routeProps";

const mapStateToProps = (state, ownProps) => {
  // console.log(state.session.token);
  return {
    token: state.session.token,
    Target: ownProps.Target,
    history: ownProps.history,
    location: ownProps.location,
    match: ownProps.match,
    params: ownProps.match.params,
    search: ownProps.location.search
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    routeInfo: (history, location, match, params, search) => {
      if(history) dispatch(setHistory(history));
      if(location) dispatch(setLocation(location));
      if(match) dispatch(setMatch(location));
      if(params) dispatch(setParams(params));
      if(search) dispatch(setSearch(search));
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return{
    token: stateProps.token,
    Target: stateProps.Target,
    routeProps: () => dispatchProps.routeInfo(stateProps.history, stateProps.location, stateProps.match, stateProps.params, stateProps.search)
  }
}

const LogCheckContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LogCheck);

export default LogCheckContainer;
