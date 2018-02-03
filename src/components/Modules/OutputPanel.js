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
import {
  Card,
  Image,
} from 'semantic-ui-react';

const OutputPanel = (props) => {
  console.log("------------------- START props.outputLoc -------------------");
  console.log(props);
  console.log("-------------------- END props.outputLoc --------------------");
  
  return (
   <Card>
      <Card.Content>
          <Image src={props.outputLoc} alt="line" style={{width: 400}} />
      </Card.Content>
    </Card>
  );
}

export default OutputPanel;
