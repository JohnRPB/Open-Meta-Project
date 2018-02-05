import React from "react";
import { Dropdown, Menu, Search } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = userId => {
  return (
    <div className="ui secondary menu">
      <NavLink to="/landing" className="item">
        Open Meta
      </NavLink>
      <NavLink to="/dashboard" className="item">
        Dashboard
      </NavLink>
      <NavLink to="/myanalyses" className="item">
        My Data
      </NavLink>

      <div className="right menu">
        <Search placeholder="Search website..." size="small" />

        <Dropdown item text={<i className="user circle outline icon" />}>
          <Dropdown.Menu>
            <Dropdown.Item>My Account</Dropdown.Item>
            <Dropdown.Item>
              <NavLink to={`/profile/`}>Profile</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Nav;
