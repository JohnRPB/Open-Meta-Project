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
import { Card, Image, Container, Dimmer, Loader, Segment } from "semantic-ui-react";
import "../../index.css";

// ---------------------------------------------------------
// Loader
// 2018-01-31 22:49
// ---------------------------------------------------------

const LoadingComp = () => (
    <Dimmer active>
      <Loader inverted>Loading</Loader>
    </Dimmer>
);

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

class IframeDisplay extends Component {
  // componentDidMount() {
  //   this.input.onload = () => {
  //     return LoadingComp();
  //   };
  // }

  // //ref={iframe => {
  //   this.input = iframe;
  // }}
  render() {
    return (
      <div className="frame-container">
        <a href={this.props.outputLoc} style={{ float: "right" }}>
          See larger
        </a>
        <iframe src={this.props.outputLoc} frameBorder="0" scrolling="no" />
      </div>
    );
  }
}

const OutputPanel = props => {
  return (
    <Segment style={{ height: "550px", width: "680px", border:"none" }}>
      {props.loading ? <LoadingComp /> : <IframeDisplay {...props} />}
    </Segment>
  );
};

export default OutputPanel;
