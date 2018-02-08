// ---------------------------------------------------------
// Output panel
// 2018-01-31 22:49
// ---------------------------------------------------------
// Recieves api URL and renders result inside a card

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom';
import {Card, Image, Container, Dimmer, Loader} from 'semantic-ui-react';
import '../../index.css';

// ---------------------------------------------------------
// Loader
// 2018-01-31 22:49
// ---------------------------------------------------------


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
        <a href={this.props.outputLoc} style={{float: 'right'}}>
          See larger
        </a>
        <iframe
          src={this.props.outputLoc}
          frameBorder="0"
          title={this.props.outputLoc}
          scrolling="no"
        />
      </div>
    );
  }
}

const OutputPanel = props => {
  return (
    <Container style={{height: '550px', width: '680px'}}>
      <Dimmer active={props.loading} >
        <Loader inverted>Loading</Loader> 
      </Dimmer>
      <IframeDisplay {...props} />
    </Container>
  );
};

export default OutputPanel;
