import Search from '../components/Search/Search';
import {connect} from 'react-redux';
import SearchAnalyses from '../components/Search/SearchAnalyses';


function mapStateToProps(dispatch) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return {}
}


const SearchAnalysesContainer = connect(mapStateToProps, mapDispatchToProps)(SearchAnalyses);

export default SearchAnalysesContainer;
