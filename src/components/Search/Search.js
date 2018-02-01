import React from "react";
import {
  Grid,
  Image,
  Segment,
  Header,
  Container,
  Card,
  Statistic
} from "semantic-ui-react";
import Feed from "./Feed";
import Nav from "../Nav";
import Related from "./Related";

const Search = () => (
  <div class="ui  vertical masthead center aligned segment">
    <div class="following bar">
      <div class="ui container">
        <Nav />
      </div>
    </div>
    <br />
    <br />
    <Container />
  </div>
);

export default Search;
