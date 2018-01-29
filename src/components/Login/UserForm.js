//login component

//logininUserFunction
//fetch request to server url method post
//in post include the serialized form

//in login route
//Users.find or create
//if found or created -> res.cookie and add username and password to cookie

//for rest of team
//for each api route check the cookie

import React, {Component} from "react";

//form serializer
var serialize = require("form-serialize");

class UserForm extends Component {
  constructor() {
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm() {
    var form = document.querySelector("#example-form");
    var str = serialize(form);
    console.log("str =>", str);
  }

  render() {
    return (
      <div>
        <form id="example-form" onSubmit={this.onSubmit}>
          <input type="text" name="foo" />
          <input type="submit" value="do it!" />
        </form>
      </div>
    );
  }
}

export default UserForm;
