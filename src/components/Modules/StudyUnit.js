// ---------------------------------------------------------
// Study selector Popup
// 2018-02-01 08:23
// ---------------------------------------------------------
// Div inside popup panel that displays study selection
// options

import React, {Component} from 'react';
import {
  Checkbox,
  List,
} from 'semantic-ui-react';

// Checked/Unchecked study
class StudyUnit extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      checked: true,
    };
  }

  toggleState = () => {
    if (this.state.checked) {
      this.setState({
        checked: false,
      });
    } else {
      this.setState({
        checked: true,
      });
    }
  };

  render() {
    return (
      <Checkbox
        label={this.props.studyLabel}
        onChange={this.toggleState}
        checked={this.state.checked}
      />
    );
  }
}

export default StudyUnit;
