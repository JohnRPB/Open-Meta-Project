import React from 'react';
import {Button, Grid, Modal, Form} from 'semantic-ui-react';

const ButtonModal = ({onSave, changeCategory, categories, open}) => {
  return (
    <Modal open={open}>
      <Modal.Header>Save Collection</Modal.Header>
      <Grid centered>
        <Form onSubmit={onSave}>
          <Form.Field required>
            <label>Collection Name</label>
            <input type="text" name="collection[name]" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input type="text" name="description" />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input type="text" name="category[0]" />
          </Form.Field>
          {[...Array(categories - 1)].map((x, i) => (
            <Form.Field key={i}>
              <label>Category</label>
              <input name={`category[${i + 1}][name]`} />
            </Form.Field>
          ))}
          <Button
            type="button"
            onClick={() => changeCategory(categories + 1)}
            content="Add Category"
            icon="plus"
            labelPosition="left"
          />
          <Button type='submit' >Save</Button>
        </Form>
      </Grid>
    </Modal>
  );
};

export default ButtonModal;
