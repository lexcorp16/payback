import React from "react";
import PropTypes from "prop-types";
import { Flex, Avatar, Tr, Td, Text, Label } from "./../../components";
import { firstTwoLetters } from "./../../utils";

function Row({ id, firstName, lastName, role, email }) {
  return (
    <Tr>
      <Td sm>
        <Flex justifyContent="flex-start">
          <Avatar mr={3}>
            {firstTwoLetters(firstName, lastName)}
          </Avatar>
          <Text>
            {firstName + " " + lastName}
          </Text>
        </Flex>
      </Td>
      <Td sm>
        {email}
      </Td>
      <Td sm>
        <Label success>
          {role}
        </Label>
      </Td>
      <Td sm>
        <Text color="textMuted">
          <a href="#">Change role</a> | <a href="#">Delete</a>
        </Text>
      </Td>
    </Tr>
  );
}

Row.propTypes = {};

export default Row;
