import styled, { css } from "styled-components";
import { space, fontSize } from "styled-system";

const Avatar = styled.div`
  font-size: 1.2rem;
  height: ${props => props.height || "36px"};
  width: ${props => props.width || "36px"};
  min-width: ${props => props.minWidth || "36px"};
  border-radius: ${({ theme }) => theme.radius};
  background-color: #0e273d;
  background-size: cover;
  background-image: url(${props => props.image});
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${space};
  ${fontSize};
  ${props =>
    props.circle &&
    css`
    border-radius: 1000px;
  `};
`;

export default Avatar;
