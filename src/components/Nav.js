import React from "react";
import { Dropdown, Menu, Search } from "semantic-ui-react";

const Nav = () => {
  return (
    <div className="ui secondary menu">
      <a className="active item">Open Meta</a>
      <a className="item">My Dashboard</a>
      <a className="item">My Reviews</a>

      <div className="right menu">
        <Search size="small" />

        <Dropdown item text={<i className="user circle outline icon" />}>
          <Dropdown.Menu>
            <Dropdown.Item>My Account</Dropdown.Item>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Other</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Nav;
