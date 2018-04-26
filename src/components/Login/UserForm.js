//login component

//logininUserFunctior
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

// validation
import {validateRegistrationError} from './validators';
import ErrorMessage from './ErrorMessage';
import ValidationErrorMessage from './ValidationErrorMessage';

//form serializer
var serialize = require('form-serialize');

//fix form serializer

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
    }
  }

  sendForm = e => {
    console.log('In here');
    console.log('e: ', e);

    e.preventDefault();
    var form = e.target;
    console.log('form: ', form);

    // var str = serialize(form);
    var obj = serialize(form, {hash: true});
    console.log('obj: ', obj);
    //obj.action = 'login';

    // reset errors
    this.setState({
      errors: {}
    });

    if (obj.action === 'login') {
      // console.log('login starting');
      axios
        .post(`${root()}/api/login`, JSON.stringify(obj), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(async response => {
          console.log("response: ", response);
          
          // console.log('data returned => ', data);
          let data = response.data;
          console.log('response: ', response);

          if (data.token) {
            this.props._addToken(data.token);
            this.props._addId(data.id);
            this.props.userFromId(data.id);
          } else {
            console.log("data: ", data);
            
            // Add back-end errors
            let newErrors = Object.assign({}, 
              this.state.errors, {
                backEnd: data.message
              }
            )

            this.setState({
              errors: newErrors
            })
          }
          return data;
          // data = data.json()
          // console.log("data returned => ", data);
        })
        .then(data => this.props.history.push(`/analyses`))
        .catch(error => console.error('Error:', error));
    }

    console.log('obj.action: ', obj.action);

    if (obj.action === 'register') {
      console.log('register starting');

      let registrationError = validateRegistrationError(obj);

      if (registrationError) {
        this.setState({
          errors: registrationError
        });
      } else {
        axios
          .post(`${root()}/api/register`, JSON.stringify(obj), {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            let data = response.data;
            console.log("------------------- START data -------------------");
            console.log(data);
            console.log("-------------------- END data --------------------");
            
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
            } else {
            console.log("data: ", data);
            
            // Add back-end errors
            let newErrors = Object.assign({}, 
              this.state.errors, {
                backEnd: data.message
              }
            )

            this.setState({
              errors: newErrors
            })
          }
            // console.log('token added');
            return data;
          })
          .catch(error => console.error('Error:', error));
      }
    }
  };

  render() {
    return (
      <div>
        <div id="wrapper">
          <h1>OpenMeta</h1>
          <h2>Create your research meta-analysis</h2>
          <form onSubmit={this.sendForm} id="example-form">
              <ErrorMessage errors={this.state.errors} />
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
                <input type="text" name="userEmail" placeholder="email" />
                <div>
                  <input
                    type="password"
                    name="passHash"
                    placeholder="password"
                  />
                  <div>
                    <input
                      type="password"
                      name="confirmPassHash"
                      placeholder="repeat password"
                    />
                    <input type="submit" value="reset password" />
                    <div>
                      <input type="submit" value="register" />
                      <input
                        className="login-submit"
                        type="submit"
                        value="login"
                      />
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
