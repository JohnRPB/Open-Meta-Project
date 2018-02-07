import {connect} from 'react-redux';
import {changeButton, newResults, setFetch} from '../../actions/collectionEdit';
import SubmitForm from '../../components/CollectionEditor/SubmitForm';
import serialize from 'form-serialize';
import axios from 'axios';
import root from '../../lib/root';

const mapStateToProps = state => {
  return {
    authors: state.collectionEdit.varObj.buttons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAuthors: number => {
      dispatch(changeButton(number));
    },
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      data.study.stats.sampleSize = Number(data.study.stats.sampleSize);
      data.study.stats.stdErr = Number(data.study.stats.stdErr);
      data.study.stats.testStatVal = Number(data.study.stats.testStatVal);
      let getString = `${root()}/api/studies/submit`;
      dispatch(setFetch(true));
      axios
        .post(getString, data)
        .then(response => {
          dispatch(changeButton(1));
          dispatch(newResults(response.data));
          dispatch(setFetch(false));
          form.reset();
        })
        .catch(err => console.error(err));
    },
  };
};

const SubmitFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  SubmitForm,
);

export default SubmitFormContainer;
