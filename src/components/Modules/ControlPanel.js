// ---------------------------------------------------------
// Control Panel 
// 2018-02-01 10:09
// ---------------------------------------------------------
// Dynamically passes its props to all of its children

import React, {Component} from 'react';
import axios from 'axios';
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
  List,
} from 'semantic-ui-react';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props=props;
    this.state = {
      
    }
  }

  updateState = async (updatedState) => {
    this.setState({
      ...updatedState
    });
  }

  render() {
    return (
      <PanelContainer {...this.props} updateState={this.updateState}>
        <Divider horizontal inverted />
        <h4> Studies included </h4>
        {this.props.children}
        <Divider horizontal inverted />
        <h4> Controls </h4>
      </PanelContainer>
  );
  }
};

const renderChildren = (props) => {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      studies: props.studies
    });
  });
}

const PanelContainer = (props) => {
  return (
    <Container fluid>
      {renderChildren(props)}
    </Container>
  )
}

export default ControlPanel;

