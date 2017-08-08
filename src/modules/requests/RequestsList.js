import React from "react";
import styled from "styled-components";
import RequestListItem from "./RequestsListItem";

export default ({ requests }) => {
  const renderRequestitems = () =>
    requests.map(request => {
      return <RequestListItem key={request.id} {...request} />;
    });

  return (
    <RequestsList>
      {renderRequestitems()}
    </RequestsList>
  );
};

const RequestsList = styled.ul`
  background-color: white;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
`;
