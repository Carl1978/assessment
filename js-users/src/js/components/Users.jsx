import React from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

const Users = ({ users, page, maxUsersToDisplay, onToggleActivate }) => {
  const startIdx = (page - 1) * maxUsersToDisplay;
  const userList = users.map((user, index) => {
    return (
      <User
        key={user.id}
        user={user}
        count={startIdx + index + 1}
        onToggleActivate={onToggleActivate}
      />
    );
  });

  return (
    <div className="container-users">
      <h1>Users List</h1>
      <NavLink exact to="/new">
        Create New User
      </NavLink>
      <table className="table-users">
        <thead>
          <tr>
            <th style={{ width: "50px" }}>Status</th>
            <th style={{ width: "50px" }}>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th style={{ width: "250px" }}>Created At</th>
          </tr>
        </thead>
        <tbody>{userList}</tbody>
      </table>
    </div>
  );
};

export default Users;
