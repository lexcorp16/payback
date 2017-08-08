import React from "react";
import styled from "styled-components";
import { Flex, Text, Label } from "./../../components";

export default props => {
  return (
    <SingleBeneficiaryHistoryItem>
      <Flex>
        <Text color="textMuted" fontSize={2}>
          By Olaseike
        </Text>
        <Text color="textMuted" fontSize={2}>
          Mar 30, 2017
        </Text>
      </Flex>
      <Flex mt={2}>
        <Flex>
          <Text fontSize={4} mr={4}>
            Lunch for the week
          </Text>
          <Label success>Approved</Label>
        </Flex>
        <Text>N220,000.00</Text>
      </Flex>
    </SingleBeneficiaryHistoryItem>
  );
};

const SingleBeneficiaryHistoryItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.bg};
  &:last-child {
    border-bottom: none;
  }
`;
