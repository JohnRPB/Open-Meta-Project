import React, {Component} from "react";
import {withRouter} from "react-router-dom";
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
    ? "https://radiant-taiga-58264.herokuapp.com"
    : "http://localhost:8000";

// --------------------------------------------
// component
// --------------------------------------------

class AnalysisModal extends Component {
  constructor(props) {
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();
    var form = document.querySelector("#new-analysis");
    var obj = serialize(form, {hash: true});
    obj.id = this.props.id;
    obj.headers = new Headers({
      "x-access-token": this.props._token
    });

    axios.post(`${root}/api/analyses`, obj).then(response => {
      this.props.history.push(`/selectcollection?id=${response.data}`);
    });
  }

  render() {
    console.log("modal props => ", this.props);
    return (
      <Modal trigger={<Button>New Analysis</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Create a New Analysis</Header>
            <Form id="new-analysis" onSubmit={this.sendForm}>
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

export default withRouter(AnalysisModal);
