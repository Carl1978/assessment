import React from "react";

const User = ({ user, count, onToggleActivate }) => {
  const { id, first_name, last_name, created_at, status } = user;
  let classNameRowUser = "row-user";
  let buttonText = "Lock";

  if (status === "locked") {
    classNameRowUser += " row-user-lock";
    buttonText = "Activate";
  }

  return (
    <tr className={classNameRowUser}>
      <td>
        <button onClick={onToggleActivate.bind(this, id)}>{buttonText}</button>
      </td>
      <td>{count}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{created_at}</td>
    </tr>
  );
};

export default User;
