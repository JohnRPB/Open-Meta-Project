import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, Redirect, Switch } from "react-router";
import serialize from "form-serialize";

import createHistory from "history/createBrowserHistory";

const history = createHistory();

// // Get the current location.
// const location = history.location;

// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
// });

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    event.preventDefault();
  };

  handleResultSelect = () => {
    history.push({
      pathname: "/sitesearch",
      search: `?query=${this.state.value}`
    });
  };

  render() {
    return (
      <div className="ui secondary menu">
        <NavLink to="/landing" className="item">
          Open Meta
        </NavLink>
        {/* <NavLink to="/dashboard" className="item">
          My Dashboard
        </NavLink> */}
        <NavLink to="/myanalyses" className="item">
          My Reviews
        </NavLink>
        <NavLink to="/collections/5a7a42405aed131eefe06b67/edit" className="item">
          Collection
        </NavLink>
        <NavLink to="/collections/5a7a42405aed131eefe06b67/edit?analysis=5a7a423f5aed131eefe06b40" className="item">
          Collection W/ Analysis
        </NavLink>

        <div className="right menu">
          <form
            //action="/sitesearch"
            className="ui search icon input"
            onSubmit={this.handleResultSelect}
          >
            <input
              name="query"
              class="prompt"
              type="text"
              placeholder="Search website..."
              onChange={this.handleChange}
            />
            <i class="search icon" />
          </form>

          <Dropdown item text={<i className="user circle outline icon" />}>
            <Dropdown.Menu>
              <Dropdown.Item>My Account</Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/profile">Profile</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/collections/new">Create Collection</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/selectcollection">Select Collection</NavLink>
              </Dropdown.Item>
              <Dropdown.Item>Other</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Nav;
