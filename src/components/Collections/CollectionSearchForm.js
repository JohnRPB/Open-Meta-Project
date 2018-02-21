import React from 'react';
import {
  // Icon,
  Grid,
  Form,
  Segment,
  Menu,
  Button,
} from 'semantic-ui-react';

const CollectionSearchForm = ({
  active,
  onSearch,
  bumpAuthors,
  numberOfAuthors,
  flipActive,
  onSubmit,
}) => {
  console.log(numberOfAuthors);
  return (
    <Grid.Column width={8}>
      <Menu attached="top" tabular>
        <Menu.Item
          active={active}
          onClick={() => (active ? null : flipActive())}
          name="Search for Studies"
        />
        <Menu.Item
          active={!active}
          onClick={() => (!active ? null : flipActive())}
          name="Submit Study"
        />
      </Menu>
      <Segment attached="bottom">
        {active ? (
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
            <Button type="submit">Submit</Button>
          </Form>
        ) : (
          <Form onSubmit={onSubmit}>
            <Form.Field required>
              <label>DOI</label>
              <input name="study[DOI]" placeholder="Keywords" />
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
            {[...Array(numberOfAuthors - 1)].map((x, i) => (
              <Form.Field key={i}>
                <label>Author</label>
                <input name={`authors[${i + 1}][name]`} placeholder="Author" />
              </Form.Field>
            ))}
            <Button
              type="button"
              onClick={bumpAuthors}
              content="add author"
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
        )}
      </Segment>
    </Grid.Column>
  );
};

export default CollectionSearchForm;
