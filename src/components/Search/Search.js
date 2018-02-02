<<<<<<< HEAD
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
=======
import React, {
  Component
} from 'react';
import {
  Grid,
  Header,
  Form,
  Button
} from 'semantic-ui-react';

const Search = ({
  onSubmit
}) => {
  return (
    <div>
      <Header as="h1">Search (Work in progress)</Header>
      <Grid divided = 'vertically' padded>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={7}>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Keywords</label>
          <input name="tags" placeholder="Keywords" />
        </Form.Field>
        <Form.Field>
          <label>Study</label>
          <input name="study" placeholder="Study Name" />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <input name="author" placeholder="Author" />
        </Form.Field>
        <Form.Field>
          <label>Journal</label>
          <input name="journal" placeholder="Journal" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      </Grid.Column>
          <Grid.Column width={7}>
            <Table celled>
            </Table>
          </Grid.Column>
    </Grid.Row>
  </Grid>
    </div>
  );
};
>>>>>>> feature-search

export default Search;
