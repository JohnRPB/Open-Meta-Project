import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter, Redirect, Switch } from "react-router";
import serialize from "form-serialize";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    redirectToNewPage: false
  };

  handleResultSelect = () => {
    // this.props.handleSubmit();
    // this.props.submission();
    this.setState({ redirectToNewPage: true });
  };

  /* <Redirect
      to={`/sitesearch?query=${this.props.location.search.slice(7)}`}
    /> */

  render() {
    console.log(this.props);
    console.log("THIS.SUBMISSION", this.submission);

    if (this.state.redirectToNewPage) {
      return <Redirect to="/sitesearch" />;
    }
    // if (
    //   this.props.submission == true // &&
    //   // this.props.location.pathname != "/sitesearch"
    // ) {
    //   return <Redirect to="/sitesearch" />;
    // }

    return (
      <div className="ui secondary menu">
        <NavLink to="/landing" className="item">
          Open Meta
        </NavLink>
        <NavLink to="/dashboard" className="item">
          My Dashboard
        </NavLink>
        <NavLink to="/myanalyses" className="item">
          My Reviews
        </NavLink>

        <div className="right menu">
          <form
            className="ui search icon input"
            onSubmit={this.handleResultSelect}
            //  this.props.handleResultSelect;
          >
            <input
              name="query"
              class="prompt"
              type="text"
              placeholder="Search website..."
            />
            <i class="search icon" />
          </form>

          <Dropdown item text={<i className="user circle outline icon" />}>
            <Dropdown.Menu>
              <Dropdown.Item>My Account</Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/profile">Profile</NavLink>
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
