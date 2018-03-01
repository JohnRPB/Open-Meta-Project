import React, { Component } from "react";
import { 
  Button, 
  // Checkbox, 
  Form, 
  Container 
} from "semantic-ui-react";
import root from 'lib/root';

//form serializer
var serialize = require("form-serialize");


class NewProfile extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    var form = document.querySelector("#example-form");
    // var str = serialize(form);
    var obj = serialize(form, { hash: true });

    // console.log("starting fetch");
    // console.log("obj =>", obj);

    fetch(`${root()}/api/newprofile`, {
      method: "POST",
      headers: new Headers({
        "x-access-token": this.props._token,
        "Content-Type": "application/json"
      }),
      // mode: "cors",
      // cache: "default",
      body: JSON.stringify(obj)
    }).then(data => {
      this.props.history.push("/myanalyses");
    });
  }

  render() {
    return (
      <Container>
        <h2 style={{ marginTop: "30px" }}>
          Welcome, please enter your details
        </h2>
        <Form onSubmit={this.submitForm} id="example-form">
          <Form.Field>
            <label>First Name</label>
            <input name="first" placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input name="last" placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Title</label>
            <input name="title" placeholder="Title" />
          </Form.Field>
          <Form.Field>
            <label>Organization</label>
            <input name="organization" placeholder="Organization" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name="description" placeholder="Description" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default NewProfile;
