import React from "react";
import Users from "../Users";
import Pagination from "../Pagination";

const Show = props => {
  const { users, match, pageEnd, maxUsersToDisplay, onToggleActivate } = props;
  let page = match.params.page;

  if (page === undefined) {
    page = 1;
  }

  page = parseInt(page);

  const startIdx = (page - 1) * maxUsersToDisplay;
  const usersMax = users.slice(startIdx, startIdx + maxUsersToDisplay);

  return (
    <div>
      <Users
        users={usersMax}
        page={page}
        maxUsersToDisplay={maxUsersToDisplay}
        onToggleActivate={onToggleActivate}
      />
      <Pagination page={page} pageEnd={pageEnd} />
    </div>
  );
};

export default Show;
