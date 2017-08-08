import React from "react";
import UsersListItem from "./UsersListItem";

export default props => {
  return (
    <tbody>
      {renderTableBody(props)}
    </tbody>
  );
};

function renderTableBody(props) {
  return props.users.map((users, key) =>
    <UsersListItem key={key} {...users} />
  );
}
