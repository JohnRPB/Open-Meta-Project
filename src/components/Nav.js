import React from "react";
import { Dropdown, Menu, Search } from "semantic-ui-react";

const Nav = () => {
  return (
    <div class="ui secondary menu">
      <a class="active item">Open Meta</a>
      <a class="item">My Dashboard</a>
      <a class="item">My Reviews</a>

      <div class="right menu">
        <Search size="small" />

        <Dropdown item text={<i class="user circle outline icon" />}>
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
