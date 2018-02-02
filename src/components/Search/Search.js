import React, {
  Component
} from 'react';
import {
  Grid,
  Header,
  Form,
  Button,
  Table
} from 'semantic-ui-react';
import SearchTableContainer from '../../containers/SearchTableContainer';
import SearchCollectionContainer from '../../containers/SearchCollectionContainer.js';
const Search = ({
  onSubmit,
}) => {

import React, { Component } from "react";
import { Grid, Header, Form, Button, Table } from "semantic-ui-react";

const Search = ({ onSubmit }) => {
  return (
    <div>
      <Header as="h1">Search (Work in progress)</Header>
      <Grid divided="vertically" padded>
        <Grid.Row>
          <Grid.Column width={1}>
    </Grid.Column>
    <Grid.Column width={7}>
      <SearchCollectionContainer />
    </Grid.Column>
        </Grid.Row>
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
            <SearchTableContainer />
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
          <Grid.Column width={7}>{/* <Table celled /> */}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Search;
