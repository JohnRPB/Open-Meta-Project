import {connect} from 'react-redux';
import Forms from '../../../components/Pages/CollectionEdit/Forms';
import {setTab} from '../../../actions/CollectionEditPage';

const mapStateToProps = state => {
  return {
    activeTab: state.CollectionEditPage.varObj.tab,
    isFetching: state.CollectionEditPage.varObj.isFetching
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
