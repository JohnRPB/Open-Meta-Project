import {
  addText,
  handleDropping,
  showForm,
  deleteElement,
  editElement,
  saveElement,
  // saveDocument,
  updateAnalysis,
} from 'actions/AnalysisEditPage';
// import { getAnalysis } from 'actions/AnalysisDisplayPage';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import serialize from 'form-serialize';

import AnalysisEditPage from 'components/Pages/AnalysisEdit/AnalysisEditPage';
import { getAnalysisFor, saveAnalysisFor } from "actions/apiHelpers";

function mapStateToProps(state, ownProps) {
  // console.log(ownProps);
  return {
    blocks: state.AnalysisEditPage.Analysis.data ? state.AnalysisEditPage.Analysis.data.blocks : [],
    dustbins: state.AnalysisEditPage.dustbins,
    boxes: state.AnalysisEditPage.boxes,
    droppedBoxNames: state.AnalysisEditPage.droppedBoxNames,
    showForm: state.AnalysisEditPage.showForm,
    editing: state.AnalysisEditPage.editing,
    Analysis: state.AnalysisEditPage.Analysis,
    title: state.AnalysisEditPage.title,
    analysisId: ownProps.match.params.analysis_id
    // _id: state.session.id,
    // _token: state.session.token,
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
    getAnalysis: async id => {
      await getAnalysisFor("EDIT", id, dispatch);
    },
    saveDocument: (e, id, obj) => {
      //dispatch(saveDocument());
      saveAnalysisFor("EDIT", id, obj, dispatch);
    },
    //loadDocument: data => {
      //dispatch(loadDocument(data));
    //}

    // getUpdatedModules: () => {
    //   dispatch(getUpdatedModules());
    // }
  };
}

const ProjectContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AnalysisEditPage)
);
export default withRouter(ProjectContainer);
