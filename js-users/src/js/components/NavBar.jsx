import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="nav-bar">
        <ul>
          <li>
            <NavLink exact to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/new">
              New
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/edit">
              Edit
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
