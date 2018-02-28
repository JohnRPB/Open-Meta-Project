// ---------------------------------------------------------
// Study Checkbox
// 2018-02-01 08:23
// ---------------------------------------------------------
// Div inside popup panel that displays study selection
// options

import React from "react";
import { Checkbox } from "semantic-ui-react";

class StudyCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // additional props: moduleId, studyId
  }

  render() {
    return (
      <Checkbox
        label={this.props.studyName}
        onChange={this.props.handleClick}
        checked={this.props.checked}
        moduleidx={this.props.moduleIdx}
        studyidx={this.props.studyIdx}
      />
    );
  }
}

export default StudyCheckbox;
