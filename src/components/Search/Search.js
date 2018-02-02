import React, {Component} from 'react';
import {Header, Form, Button} from 'semantic-ui-react';

const Search = ({onSubmit}) => {
  return (
    <div>
      <Header as="h1">Search (Work in progress)</Header>
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
    </div>
  );
};

export default Search;
