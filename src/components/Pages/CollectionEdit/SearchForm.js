import React from 'react';
import {Form, Button} from 'semantic-ui-react';

const SearchForm = ({onSearch}) => {
  return (
    <Form onSubmit={onSearch}>
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
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
