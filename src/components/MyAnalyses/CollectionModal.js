import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea
} from "semantic-ui-react";
var serialize = require("form-serialize");

// --------------------------------------------
// routing
// --------------------------------------------

const root =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_HEROKU_URL
    : "http://localhost:8000";

// --------------------------------------------
// component
// --------------------------------------------

class CollectionModal extends Component {
  constructor(props) {
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();
    var form = document.querySelector("#new-collection");
    var obj = serialize(form, { hash: true });
    obj.id = this.props.id;

    axios.post(`${root}/api/collections`, obj).then(response => {
      this.props.history.push(`/collections/${response.data}/edit`);
    });
  }

  render() {
    return (
      <Modal trigger={<Button>New Collection</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Create a New Collection</Header>
            <Form id="new-collection" onSubmit={this.sendForm}>
              <Form.Field>
                <label>Enter a title</label>
                <input type="text" name="title" />
              </Form.Field>

              <Form.Field>
                <label>Enter a description</label>
                <TextArea name="description" />
              </Form.Field>

              <Button type="submit">Create</Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default withRouter(CollectionModal);
