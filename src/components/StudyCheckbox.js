// ---------------------------------------------------------
// Study selector Popup
// 2018-02-01 08:23
// ---------------------------------------------------------
// Div inside popup panel that displays study selection
// options

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom';
import {
  Checkbox,
  List,
} from 'semantic-ui-react';

class StudyUnit extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }


  render() {
    return (
      <Checkbox
        label={this.props.study.name}
        name={this.props.study.Id},
        onChange={this.props.handleClick},
        checked={this.props.study.checked}
      />
    );
  }
}

export default StudyCheckbox;
