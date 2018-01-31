import { addText, handleDropping, showForm } from "../actions/project";
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
    handleSubmit: e => {
      e.preventDefault();
      e.stopPropagation();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(addText(data));
      form.reset();
    },
    handleDrop: (index, item) => {
      //const { name } = item;
      let args = { index, item };
      dispatch(handleDropping(args));
    },
    handleClick: (e, index) => {
      // Don't reload the page
      e.preventDefault();
      e.stopPropagation();
      console.log(e.target);
      console.log(e.target.classList.contains("submitText"));
      if (e.target.classList.contains("submitText")) {
        return;
      }
      dispatch(showForm(index));
    }
  };
}

const ProjectContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MasterDocument)
);
export default ProjectContainer;
