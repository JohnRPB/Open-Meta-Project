import React from 'react';
import {Form, Button} from 'semantic-ui-react';

const SubmitForm = ({onSubmit, authors, changeAuthors}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Field required>
        <label>DOI</label>
        <input name="study[DOI]" placeholder="DOI" />
      </Form.Field>
      <Form.Field required>
        <label>Study</label>
        <input name="study[name]" placeholder="Study Name" />
      </Form.Field>
      <Form.Field required>
        <label>Publication Date</label>
        <input name="study[stats][pubDate]" type="date" />
      </Form.Field>
      <Form.Field required>
        <label>Sample Size</label>
        <input name="study[stats][sampleSize]" />
      </Form.Field>
      <Form.Field required>
        <label>Stat Type</label>
        <input name="study[stats][testStatType]" />
      </Form.Field>
      <Form.Field required>
        <label>Stat Value</label>
        <input name="study[stats][testStatVal]" />
      </Form.Field>
      <Form.Field required>
        <label>Standard Error</label>
        <input name="study[stats][stdErr]" />
      </Form.Field>
      <Form.Field required>
        <div>
          <label>Author</label>
          <input name={`authors[0][name]`} placeholder="Author" />
        </div>
      </Form.Field>
      {[...Array(authors - 1)].map((x, i) => (
        <Form.Field key={i}>
          <label>Author</label>
          <input name={`authors[${i + 1}][name]`} placeholder="Author" />
        </Form.Field>
      ))}
      <Button
        type="button"
        onClick={() => changeAuthors(authors + 1)}
        content="Add Author"
        icon="plus"
        labelPosition="left"
      />
      <Form.Field required>
        <label>Journal</label>
        <input name="journal[name]" placeholder="Journal" />
      </Form.Field>
      <Form.Field required>
        <label>Abstract</label>
        <input name="url" placeholder="Abstract URL" />
      </Form.Field>
      <Form.Field>
        <label>Additional Information</label>
        <input name="other[note]" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default SubmitForm;
