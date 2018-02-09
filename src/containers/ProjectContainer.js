import {
  addText,
  handleDropping,
  showForm,
  deleteElement,
  editElement,
  saveElement,
  saveDocument,
  updateAnalysis,
  loadDocument,
  getAnalysisAndLoad
} from '../actions/project';
import { getAnalysis } from '../actions/Analysis';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import serialize from 'form-serialize';

import MasterDocument from '../components/Project/MasterDocument';

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    ...state,
    blocks: state.project.blocks,
    dustbins: state.project.dustbins,
    boxes: state.project.boxes,
    droppedBoxNames: state.project.droppedBoxNames,
    showForm: state.project.showForm,
    editing: state.project.editing,
    Analysis: state.project.Analysis,
    title: state.project.title,
    analysisId: ownProps.match.params.analysis_id
    // _id: state.Token.id,
    // _token: state.Token.token,
    // isFetching: state.MyAnalysesPage.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target;
      const data = serialize(form, { hash: true });
      data.index = index;
      dispatch(addText(data));
      form.reset();
    },
    handleDrop: (indexOfDustbins, item, index) => {
      // if (index == 0) index -= 1;
      let args = { indexOfDustbins, item, index };
      dispatch(handleDropping(args));
    },
    handleClick: (e, index) => {
      // Don't reload the page
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains('submitText')) {
        return;
      }
      dispatch(showForm(index));
    },
    handleDelete: (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(deleteElement(index));
    },
    handleEdit: (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(editElement(index));
    },
    handleSave: (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target;
      const data = serialize(form, { hash: true });
      data.index = index;
      dispatch(saveElement(data));
      form.reset();
    },
    getAnalysisAndLoad: id => {
      dispatch(getAnalysisAndLoad(id));
    },
    saveDocument: (e, id, obj) => {
      //dispatch(saveDocument());
      dispatch(updateAnalysis(id, obj));
    },
    loadDocument: data => {
      dispatch(loadDocument(data));
    }

    // getUpdatedModules: () => {
    //   dispatch(getUpdatedModules());
    // }
  };
}

const ProjectContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MasterDocument)
);
export default withRouter(ProjectContainer);
