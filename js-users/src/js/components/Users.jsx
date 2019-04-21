import React from "react";
import User from "./User";

const Users = ({ users, page, maxUsersToDisplay }) => {
  const startIdx = (page - 1) * maxUsersToDisplay;
  const userList = users.map((user, index) => {
    return <User key={user.id} user={user} count={startIdx + index + 1} />;
  });

  return (
    <div className="container-users">
      <h1>Users List</h1>
      <table className="table-users">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>{userList}</tbody>
      </table>
    </div>
  );
};

export default Users;
