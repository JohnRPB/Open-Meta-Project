//login component

//logininUserFunction
//fetch request to server url method post
//in post include the serialized form

//in login route
//Users.find or create
//if found or created -> res.cookie and add username and password to cookie

//for rest of team
//for each api route check the cookie

import React, {Component} from 'react';
import root from 'lib/root';
import axios from 'axios';

//styling
import './UserForm.css';

//form serializer
var serialize = require('form-serialize');

//fix form serializer

class UserForm extends Component {
  constructor(props) {
    super(props);
  }

  sendForm = e => {
    console.log("In here");
    console.log("e: ", e);
    
    e.preventDefault();
    var form = e.target;
    console.log("form: ", form);
    
    // var str = serialize(form);
    var obj = serialize(form, {hash: true});
    console.log("obj: ", obj);
    obj.action = 'login';

    if (obj.action === 'login') {
      // console.log('login starting');
      axios
        .post(`${root()}/api/login`, JSON.stringify(obj), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async response => {
          // console.log('data returned => ', data);
          let data = response.data;
          console.log("response: ", response);
          
          if (data.token) {
            this.props._addToken(data.token);
            this.props._addId(data.id);
            this.props.userFromId(data.id);
          }
          return data;
          // data = data.json()
          // console.log("data returned => ", data);
        })
        .then(data => this.props.history.push(`/myanalyses`))
        .catch(error => console.error('Error:', error));
    }

    if (obj.action === 'register') {
      // console.log('register starting');
      axios
        .post(`${root()}/api/register`,
          JSON.stringify(obj), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          // console.log('data returned => ', data);
          let data = response.data;
          if (data.token) {
            this.props._addToken(data.token);
            this.props._addId(data.id);
            //checking the decoded of the token
            // console.log(
            //   'this is the token going to the token test route =>',
            //   this.props._token,
            // );
            // console.log('this is the id from the server =>', data.id);
            this.props.history.push('/newprofile');
          }
          // console.log('token added');
          return data;
        })
        .catch(error => console.error('Error:', error));
    }
  };

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
                      <input className="login-submit" type="submit" value="login" />
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
