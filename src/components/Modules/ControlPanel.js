// ---------------------------------------------------------
// Control Panel
// 2018-02-01 10:09
// ---------------------------------------------------------
// Dynamically passes its props to all of its children

import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Divider,
  Dimmer,
  Loader,
  Segment,
  Card,
  Icon,
  Image,
  Button,
  Checkbox,
  List
} from "semantic-ui-react";
import StudyInclusionBoxContainer from "../../containers/Modules/StudyInclusionBoxContainer";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <Divider horizontal inverted />
        <h4> Studies included </h4>
        <StudyInclusionBoxContainer moduleIdx={this.props.moduleIdx} />
        <Divider horizontal inverted />
        <h4> Controls </h4>
      </Container>
    );
  }
}

export default ControlPanel;
