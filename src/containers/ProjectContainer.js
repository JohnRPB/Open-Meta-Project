import {
  addText,
  handleDropping,
  showForm,
  deleteElement
} from "../actions/project";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import serialize from "form-serialize";

import MasterDocument from "../components/Project/MasterDocument";

function mapStateToProps(state) {
  return {
    analyses: state.project.analyses,
    dustbins: state.project.dustbins,
    boxes: state.project.boxes,
    droppedBoxNames: state.project.droppedBoxNames,
    showForm: state.project.showForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log("DATA", data);
      data.index = index;
      dispatch(addText(data));
      form.reset();
    },
    handleDrop: (index2, item, index) => {
      let args = { index2, item, index };
      dispatch(handleDropping(args));
    },
    handleClick: (e, index) => {
      // Don't reload the page
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains("submitText")) {
        return;
      }
      dispatch(showForm(index));
    },
    handleDelete: (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(deleteElement(index));
    }
  };
}

const ProjectContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MasterDocument)
);
export default ProjectContainer;
