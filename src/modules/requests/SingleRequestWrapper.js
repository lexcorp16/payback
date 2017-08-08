import React from "react";
import styled from "styled-components";

export default props => {
  return (
    <SingleRequest>
      {props.children}
    </SingleRequest>
  );
};

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
