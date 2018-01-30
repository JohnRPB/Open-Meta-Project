import { addText, handleDropping } from "../actions/project";
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
    droppedBoxNames: state.project.droppedBoxNames
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: e => {
      console.log("testing from handleSubmit");
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log("data from addText => ", data);
      dispatch(addText(data));
      form.reset();
    },
    handleDrop: (index, item) => {
      //const { name } = item;
      let args = { index, item };
      dispatch(handleDropping(args));
    }
  };
}

const ProjectContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MasterDocument)
);
export default ProjectContainer;
