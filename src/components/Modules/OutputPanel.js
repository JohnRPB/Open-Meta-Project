// ---------------------------------------------------------
// Output panel
// 2018-01-31 22:49
// ---------------------------------------------------------
// Recieves api URL and renders result inside a card

import React, {Component} from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';

const OutputPanel = ({onClick, imgAddress}) => {
  return (
    <Card>
      <Card.Content>
        <a href="#" onClick={onClick}>
          <Image src={imgAddress} alt="line" style={{width: 400}} />
        </a>
      </Card.Content>
    </Card>
  );
};

export default OutputPanel;
