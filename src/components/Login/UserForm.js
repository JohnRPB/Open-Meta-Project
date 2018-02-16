//login component

//logininUserFunction
//fetch request to server url method post
//in post include the serialized form

//in login route
//Users.find or create
//if found or created -> res.cookie and add username and password to cookie

//for rest of team
//for each api route check the cookie

import React, { Component } from "react";
import root from '../../lib/root';

//styling
import "./UserForm.css";

//form serializer
var serialize = require("form-serialize");

//fix form serializer

class UserForm extends Component {
  constructor(props) {
    super();
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();
    var form = document.querySelector("#example-form");
    var str = serialize(form);
    var obj = serialize(form, { hash: true });
    console.log("obj =>", obj.passHash);

    if (obj.action == "login") {
      console.log("login starting");
      fetch(`${root()}/api/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(response => {
          // if(response.ok) {
          //   return response.blob();
          // }
          // throw new Error('Network response was not ok.');
          return response.json();
        })
        .then(async data => {
          console.log("data returned => ", data);
          if (data.token) {
            this.props._addToken(data.token);
            this.props._addId(data.id);
          }
          return data;
          // data = data.json()
          // console.log("data returned => ", data);
        })
        .then(data => this.props.history.push(`/myanalyses/${data.id}`))
        .catch(error => console.error("Error:", error));
    }

    if (obj.action == "register") {
      console.log("register starting");
      fetch(`${root()}/api/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log("data returned => ", data);
          if (data.token) {
            this.props._addToken(data.token);
            this.props._addId(data.id);
            //checking the decoded of the token
            console.log(
              "this is the token going to the token test route =>",
              this.props._token
            );
            console.log("this is the id from the server =>", data.id);
            this.props.history.push("/newprofile");
          }
          console.log("token added");
          return data;
        })
        .catch(error => console.error("Error:", error));
    }
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
              defaultChecked
            />
            <input type="radio" id="register" name="action" value="register" />
            <input type="radio" id="reset" name="action" value="reset" />
            <div id="inputs">
              <div>
                <input type="text" name="email" placeholder="email" />
                <div>
                  <input
                    type="password"
                    name="passHash"
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
              <label htmlFor="login">
                Already registered? <span>Login</span>
              </label>
              <label htmlFor="reset">
                Password lost? <span>Reset</span>
              </label>
              <label htmlFor="login">
                <span>Back</span>
              </label>
              <label htmlFor="register">
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
