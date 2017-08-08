import React from "react";
import styled from "styled-components";

import { Flex, Text } from "./../../components";
import SingleRequestMessageListitem from "./SingleRequestMessageListitem";

export default props => {
  const renderMessages = props.messages.map((message, i) =>
    <SingleRequestMessageListitem key={i} {...message} alt={isEven(i)} />
  );

  return (
    <SingleRequestMessageList>
      {renderMessages.length > 0 ? renderMessages : emptyState}
    </SingleRequestMessageList>
  );
};

function isEven(index) {
  return index % 2 === 0;
}

const emptyState = (
  <Flex justifyContent="center">
    <Text color="textMuted" mt={8}>
      This request doesn't have any comments.
    </Text>
  </Flex>
);

const SingleRequestMessageList = styled.ul`
  background: ${({ theme }) => theme.bgMuted};
  padding: 45px 30px 120px;
  flex-grow: 1;
  overflow-y: scroll;
`;
