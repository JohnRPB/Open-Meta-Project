// ---------------------------------------------------------
// Output panel
// 2018-01-31 22:49
// ---------------------------------------------------------
// Recieves api URL and renders result inside a card

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from "react-router-dom";
import { Card, Image, Container } from "semantic-ui-react";
import "../../index.css";

// ---------------------------------------------------------
// Static png
// 2018-02-05 07:54
// ---------------------------------------------------------

const StaticDisplay = props => {
  return <Image src={props.outputLoc} />;
};

// ---------------------------------------------------------
// iframe
// 2018-02-05 07:55
// ---------------------------------------------------------

const IframeDisplay = props => {
  return (
    <div className="frame-container">
      <iframe src={props.outputLoc} frameborder="0" scrolling="no" />
    </div>
  );
};

const OutputPanel = props => {
  return (
    <Container style={{ height: "550px", width: "680px" }}>
      <IframeDisplay {...props} />
    </Container>
  );
};

export default OutputPanel;
