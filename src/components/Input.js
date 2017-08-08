import styled, { css } from "styled-components";
import { space, color } from "styled-system";

const Input = styled.input`
  ${space};
  ${color};
  box-sizing: border-box;
  font-size: 14px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  box-shadow: inset 0 0 0 1px #e7ecee;
  width: 100%;
  outline: none;
  transition: all 200ms;
  ${props =>
    props.error &&
    css`
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bdDanger};
  `};

  ${props =>
    props.sm &&
    css`
      display: inline-block;
      width: ${props => props.width || "auto"};
      padding: 10px 15px;
      font-size: 1.4rem;
      
  `};

  &:focus {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.textInfo};
    ${props => props.error && css`box-shadow: inset 0 0 0 1px red; `};
  }
`;

export default Input;
