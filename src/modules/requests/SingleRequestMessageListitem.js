import React from "react";
import styled, { css } from "styled-components";
import { Flex, Text, Hr } from "./../../components";
import { dateAndTime } from "./../../utils";

export default ({ id, user, body, createdAt, alt }) => {
  return (
    <SingleRequestMessageListItem alt={alt}>
      <Flex alignItems="flex-start">
        <Text fontSize={3} bold>
          {user.firstName}
        </Text>
        <Text color="textMuted" fontSize={2}>
          {dateAndTime(createdAt)}
        </Text>
      </Flex>
      <Hr mt={2} mb={3} />
      <Text fontSize={2}>
        {body}
      </Text>
    </SingleRequestMessageListItem>
  );
};

const SingleRequestMessageListItem = styled.li`
  padding: 20px;
  height: 100%;
  width: 80%;
  float: right;
  background-color: ${({ theme }) => theme.bgSuccess};
  border: 1px solid ${({ theme }) => theme.bdSuccess};
  border-radius: ${({ theme }) => theme.radius};
  margin-bottom: 15px;

  ${props =>
    props.alt &&
    css`
    float: left;
     background-color: ${({ theme }) => theme.bgInfo};
  border: 1px solid ${({ theme }) => theme.bdInfo};
  `};
`;
