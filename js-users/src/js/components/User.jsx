import React from "react";

const User = ({ user, count, onToggleActivate, onSelect, userSelectedId }) => {
  const { id, first_name, last_name, created_at, status } = user;
  let classNameRowUser = "row-user";
  let buttonText = "Lock";

  if (status === "locked") {
    classNameRowUser += " row-user-lock";
    buttonText = "Activate";
  }

  classNameRowUser += " .row-user-select";

  console.log("userSelectedId : " + userSelectedId);
  console.log("id : " + id);

  const isSelected = id === userSelectedId;

  return (
    <tr
      style={isSelected ? { backgroundColor: "pink" } : null}
      className={classNameRowUser}
      onClick={() => onSelect(id)}
    >
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
