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

//styling
import "./UserForm.css";

//form serializer
var serialize = require("form-serialize");

//fix form serializer

class UserForm extends Component {
  constructor() {
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();
    var form = document.querySelector("#example-form");
    var str = serialize(form);
    var obj = serialize(form, {hash: true});

    console.log(obj);
    fetch("http://localhost:8000/api/users", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(res => {
      console.log(res);
      return false;
    });
    return false;
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <h1>OpenMeta</h1>
          <h2>Create your research meta-analysis</h2>
          <form onSubmit={this.sendForm} id="example-form">
            <input
              type="radio"
              id="login"
              name="action"
              value="login"
              checked
            />
            <input type="radio" id="register" name="action" value="register" />
            <input type="radio" id="reset" name="action" value="reset" />
            <div id="inputs">
              <div>
                <input type="text" name="email" placeholder="email" />
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <div>
                    <input type="password" placeholder="repeat password" />
                    <input type="submit" value="reset password" />
                    <div>
                      <input type="submit" value="register" />
                      <input type="submit" value="login" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="labels">
              <label for="login">
                Already registered? <span>Login</span>
              </label>
              <label for="reset">
                Password lost? <span>Reset</span>
              </label>
              <label for="login">
                <span>Back</span>
              </label>
              <label for="register">
                Not registered? <span>Create an account</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
