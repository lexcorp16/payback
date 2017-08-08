import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SingleRequestHeader from "./SingleRequestHeader";
import SingleRequestMessageList from "./SingleRequestMessageList";
import SingleRequestNewMessage from "./SingleRequestNewMessage";

const SingleRequestComponent = ({
  title,
  user,
  amount,
  status,
  createdAt,
  messages
}) => {
  return (
    <SingleRequest>
      <SingleRequestHeader
        title={title}
        amount={amount}
        status={status}
        createdAt={createdAt}
        user={user}
      />
      <SingleRequestMessageList messages={messages} />
      <SingleRequestNewMessage status={status} />
    </SingleRequest>
  );
};

SingleRequestComponent.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }),
  messages: PropTypes.array
};

export default SingleRequestComponent;

const SingleRequest = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  top: 0;
  height: 100%;
  width: calc((100% - 275px) / 2);
  background: white;
  display: flex;
  flex-flow: column nowrap;
`;
