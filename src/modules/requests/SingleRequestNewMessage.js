import React from "react";
import styled from "styled-components";
import { Flex, Button, Input } from "./../../components";

export default ({ status }) => {
  const show = status === "pending";
  return (
    <div>
      {show &&
        <SingleRequestNewMessage>
          <Flex height="100%">
            <Button
              disabled={!show}
              sm
              mr={2}
              info
              style={{ backgroundColor: "white" }}
            >
              +
            </Button>
            <Input
              disabled={!show}
              placeholder="Type a message"
              sm
              style={{ flexGrow: 1 }}
            />
            <Button disabled={!show} sm ml={2}>
              Send
            </Button>
          </Flex>
        </SingleRequestNewMessage>}
    </div>
  );
};

const SingleRequestNewMessage = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.bgMuted};
  background-color: white;
  height: 75px;
  width: 100%;
  padding: 0 30px;
  box-shadow: 0 -3px 15px 0 #f4f4f4;
`;
