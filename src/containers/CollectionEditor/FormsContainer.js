import {connect} from 'react-redux';
import Forms from '../../components/CollectionEditor/Forms';
import {setTab} from '../../actions/collectionEdit';

const mapStateToProps = state => {
  return {
    activeTab: state.collectionEdit.varObj.tab,
    isFetching: state.collectionEdit.varObj.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTab: number => {
      dispatch(setTab(number));
    }
  };
};

const FormsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Forms
);

export default FormsContainer;
