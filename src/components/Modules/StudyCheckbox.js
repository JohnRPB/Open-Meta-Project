// ---------------------------------------------------------
// Study Checkbox
// 2018-02-01 08:23
// ---------------------------------------------------------
// Div inside popup panel that displays study selection
// options

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from "react-router-dom";
import { Checkbox, List } from "semantic-ui-react";

class StudyCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // additional props: moduleId, studyId
  }

  render() {
    return (
      <Checkbox
<<<<<<< HEAD:src/components/StudyCheckbox.js
        label={this.props.study.name}
        name={this.props.study.Id}
        onChange={this.props.handleClick}
        checked={this.props.study.checked}
=======
        label={this.props.studyName}
        onChange={this.props.handleClick}
        checked={this.props.checked}
        moduleidx={this.props.moduleIdx}
        studyidx={this.props.studyIdx}
>>>>>>> 9fdae4e8a35090b6092ad8d3a69a7f1a1cc4107d:src/components/Modules/StudyCheckbox.js
      />
    );
  }
}

export default StudyCheckbox;
