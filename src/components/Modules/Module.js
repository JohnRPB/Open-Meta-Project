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
    this.state = {
      time: new Date().getTime()
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("============================");
    console.log(nextProps);
    console.log("============================");
  }
  componentDidMount() {
    console.log("============================");
    console.log("THIS COMPONENT HAS MOUNTED");
    console.log("============================");
    console.log(this.state.time);
    this.props.getOcpu();
  }

  componentDidUpdate(prevProps, prevState) {

    console.log("------------------- START this.props.moduleIdx -------------------");
    console.log(this.props.moduleIdx);
    console.log("-------------------- END this.props.moduleIdx --------------------");
    

    if (prevProps.moduleIdx !== this.props.moduleIdx) {
      this.props.getOcpu();
    }
  }

  componentWillReceiveProps(nextProps) {

    console.log("-------------- Will receive props -----------------");
    

    if (this.props.moduleIdx !== nextProps.moduleIdx) {
      this.props.getOcpu();
    }
  }


  render() {
    console.log("------------------- START this.props.moduleIdx (render) -------------------");
    console.log(this.props.moduleIdx);
    console.log("-------------------- END this.props.moduleIdx --------------------");

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
