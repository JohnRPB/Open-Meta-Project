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

const ModalForm = () => (
  <Modal trigger={<Button>New Collection</Button>}>
    <Modal.Content>
      <Modal.Description>
        <Header>Create a New Collection</Header>
        <Form>
          <Form.Field>
            <label>Enter a title</label>
            <input placeholder="First Name" />
          </Form.Field>

          <Form.Field>
            <label>Enter a description</label>
            <TextArea />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ModalForm;
