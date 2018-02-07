import React, { Component } from "react";
import axios from "axios";
import { Container, Divider, Dimmer, Loader, Button } from "semantic-ui-react";

import PopupPanel from "./PopupPanel";
import ControlPanel from "./ControlPanel";

import OutputPanelContainer from "../../containers/Modules/OutputPanelContainer";
import StudyInclusionBoxContainer from "../../containers/Modules/StudyInclusionBoxContainer";

// ---------------------------------------------------------
// Top-level Module
// 2018-01-31 22:51
// ---------------------------------------------------------
// Wraps output and provides interface for popup panel
// controls to modify output through api call

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Container>
        <PopupPanel trigger={<Button>+</Button>}>
          <ControlPanel moduleIdx={this.props.moduleIdx}>
            <StudyInclusionBoxContainer moduleIdx={this.props.moduleIdx} />
          </ControlPanel>
        </PopupPanel>
        <OutputPanelContainer moduleIdx={this.props.moduleIdx} />
      </Container>
    );
  }
}

export default Module;
