import styled from "styled-components";

export default styled.img`
  height: ${props => props.height || "45px"};
  width: ${props => props.width || "auto"};
  object-fit: contain;
  object-position: left;
`;
