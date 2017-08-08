import React from "react";
import { Flex, Text } from "../../components";
import SingleRequestWrapper from "./SingleRequestWrapper";

export default props => {
  return (
    <SingleRequestWrapper>
      <Flex height="100%" width="100%" justifyContent="center">
        <Text color="textMuted">No request selected</Text>
      </Flex>
    </SingleRequestWrapper>
  );
};
