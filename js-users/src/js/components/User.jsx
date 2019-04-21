import React from "react";

const User = ({ user, count }) => {
  const { first_name, last_name, created_at } = user;

  return (
    <tr className="row-user">
      <td>{count}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{created_at}</td>
    </tr>
  );
};

export default User;
