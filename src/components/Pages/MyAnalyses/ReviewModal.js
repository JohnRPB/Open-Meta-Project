import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea
} from "semantic-ui-react";

const ReviewModal = () => (
  <Modal trigger={<Button>New Review</Button>}>
    <Modal.Content>
      <Modal.Description>
        <Header>Create a New Review</Header>
        <Form>
          <Form.Field>
            <label>Enter a title</label>
            <input type="text" />
          </Form.Field>

          <Form.Field>
            <label>Enter a description</label>
            <TextArea />
          </Form.Field>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ReviewModal;
