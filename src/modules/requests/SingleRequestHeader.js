import React from "react";
import styled from "styled-components";
import { Text, Flex, Div, Hr, Button } from "./../../components";
import { naira, dateAndTime } from "./../../utils";

export default ({ title, createdAt, amount, status, user }) => {
  return (
    <SingleRequestHeader>
      <Flex justifyContent="flex-start" mb={3}>
        <Text mr={4} fontSize={2}>
          Created by {user.firstName + " " + user.lastName}
        </Text>
        <Text mr={4} color="textSecondary" fontSize={2}>
          {dateAndTime(createdAt)}
        </Text>
      </Flex>
      <Hr mt={4} mb={4} />
      <Flex alignItems="flex-start">
        <Text mr={5}>
          {title}
        </Text>
        <Text align="right" color="textInfo" fontSize={5} bold>
          {naira(amount)}
        </Text>
      </Flex>
      <Div mt={3}>
        {status === "paid"
          ? paid
          : status === "approved"
            ? approved
            : status === "declined" ? declined : pending}
      </Div>
    </SingleRequestHeader>
  );
};

const pending = (
  <div>
    <Button success sm mr={2}>
      Approve
    </Button>
    <Button danger sm>
      Decline
    </Button>
  </div>
);

const approved = (
  <div>
    <Button success sm disabled mr={2}>
      Approved
    </Button>
  </div>
);

const declined = (
  <div>
    <Button danger sm disabled mr={2}>
      Declined
    </Button>
  </div>
);

const paid = (
  <div>
    <Button info disabled sm>
      Paid
    </Button>
  </div>
);

const SingleRequestHeader = styled.div`
  padding: 25px 30px;
  background-color: white;
  box-shadow: 0 3px 15px 0 #f4f4f4;
  position: relative;
`;
