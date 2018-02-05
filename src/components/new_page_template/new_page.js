import React from "react";
import Nav from "../Nav";
import {
  Segment,
  Grid,
  Button,
  Image,
  Container,
  Popup,
  Header
} from "semantic-ui-react";

const NewPage = () => {
  return (
    <div>
      <div className="ui  vertical masthead center aligned segment">
        <div className="following bar">
          <div className="ui container">
            <Nav />
          </div>
        </div>
        <br />
        <br />
        <br />
        <Container>{/* your stuff goes here */}</Container>
      </div>
    </div>
  );
};

export default NewPage;
