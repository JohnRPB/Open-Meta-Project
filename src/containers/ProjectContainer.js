import {
  addText,
  handleDropping,
  showForm,
  deleteElement,
  editElement,
  saveElement
} from "../actions/project";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import serialize from "form-serialize";

import MasterDocument from "../components/Project/MasterDocument";

function mapStateToProps(state) {
  return {
    blocks: state.project.blocks,
    dustbins: state.project.dustbins,
    boxes: state.project.boxes,
    droppedBoxNames: state.project.droppedBoxNames,
    showForm: state.project.showForm,
    editing: state.project.editing
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
      data.index = index + 1;
      dispatch(addText(data));
      form.reset();
    },
    handleDrop: (index2, item, index) => {
      index += 1;
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
      console.log("DATA", data);
      data.index = index;
      dispatch(saveElement(data));
      form.reset();
    }
    // getUpdatedModules: () => {
    //   dispatch(getUpdatedModules());
    // }
  };
}

const ProjectContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MasterDocument)
);
export default ProjectContainer;
