import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import root from '../../../lib/root';
import {
  Button,
  Header,
  // Image,
  Modal,
  Form,
  // Input,
  TextArea
} from "semantic-ui-react";
var serialize = require("form-serialize");


// --------------------------------------------
// component
// --------------------------------------------

class AnalysisModal extends Component {
  constructor(props) {
    super();
  }

  sendForm = (e) => {
    // console.log("send form starting");
    e.preventDefault();
    var form = document.querySelector("#new-analysis");
    var obj = serialize(form, { hash: true });
    obj.id = this.props._id;
    // console.log("obj in analysis => ", obj);
    // obj.headers = new Headers({
    //   "x-access-token": this.props._token
    // });

    axios
      .post(`${root()}/api/analyses`, obj)
      .then(response => {
        // console.log("response in axios post gotten =>", response);
        this.props.history.push(`/selectcollection?id=${response.data}`);
      })
      .catch(e => {
        // console.log("error in axios post sendForm", e);
      });
  }

  render() {
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
