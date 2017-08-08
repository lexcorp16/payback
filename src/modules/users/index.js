import React from "react";
import styled from "styled-components";
import { Flex, Button, Div, Input, Table } from "./../../components";

import UsersList from "./UsersList";
import UsersListHeader from "./UsersListHeader";

export default props => {
  return (
    <Div px={4} py={4}>
      <Flex mb={3}>
        <Button sm>New User</Button>
        <Input placeholder="Search Users ..." sm width="275px" />
      </Flex>
      <UsersTable>
        <Table>
          <UsersListHeader titles={["User", "Email", "Role", "Actions"]} />
          <UsersList users={props.users} />
        </Table>
      </UsersTable>
    </Div>
  );
};

const UsersTable = styled.div`
  background-color: white;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  padding: 20px 20px 40px;
`;
