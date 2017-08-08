import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex, Text } from "./../../components";

export default ({ name }) => {
  return (
    <SingleBeneficiaryHeader>
      <Flex height="100%">
        <Link to="/beneficiaries">
          <Text color="textInfo">
            <span>←</span>&nbsp; Back
          </Text>
        </Link>
        <Text fontSize={5} align="center" style={{ flexGrow: 1 }} pr={8}>
          {name}
        </Text>
      </Flex>
    </SingleBeneficiaryHeader>
  );
};

const SingleBeneficiaryHeader = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 74px;
  width: calc(100% - 275px);
  background-color: white;
  z-index: 2;
  box-shadow: 0 2px 10px -1px rgba(9, 165, 219, 0.10);
  padding: 0 30px;
`;
