import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Flex, Avatar, Div, Text } from "../../components";
import { firstTwoLetters, timeAgo, naira } from "../../utils";

export default props => {
  return (
    <NavLink to={`/requests/${props.id}`}>
      <RequestsListItem>
        <Flex alignItems="flex-start">
          <Flex
            alignItems="flex-start"
            justifyContent="flex-start"
            width="100%"
          >
            <Avatar height="64px" width="64px" minWidth="64px" mr={4}>
              {firstTwoLetters(props.user.firstName, props.user.lastName)}
            </Avatar>
            <Div mr={5}>
              <Text fontSize={5} mb={1}>
                {props.user.firstName}
              </Text>
              <Text fontSize={3} color="textSecondary">
                {props.title}
              </Text>
            </Div>
          </Flex>
          <Div style={{ minWidth: "100px" }}>
            <Text align="right" color="textMuted" fontSize={2} mt={1}>
              {timeAgo(props.createdAt)}
            </Text>
            <Text
              align="right"
              color="textInfo"
              bold
              fontSize={4}
              style={{ marginTop: "12px" }}
            >
              {naira(props.amount)}
            </Text>
          </Div>
        </Flex>
      </RequestsListItem>
    </NavLink>
  );
};

const RequestsListItem = styled.li`
  padding: 25px 30px 30px;
  position: relative;
  transition: background-color 300ms ease-in;
  border-radius: ${({ theme }) => theme.radius};
  &:hover {
    background-color: ${({ theme }) => theme.bgMuted};
  }
  &:after {
    background-color: ${({ theme }) => theme.bg};
    width: calc(100% - 60px);
    height: 1px;
    left: 30px;
    bottom: 0;
    position: absolute;
    content: "";
  }
  a:last-child  & {
    &:after {
      display: none;
    }
  }
  .active & {
    background-color: ${({ theme }) => theme.bgInfo};
  }
`;
