import styled, { css } from "styled-components";
import { space } from "styled-system";

const Button = styled.button`
  ${space};
  width: 100%;
  padding: 15px;
  font-size: 1.6rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.bgPrimary};
  color: white;
  appearance: none;
  transition: all 300ms;
  cursor: pointer;
  outline: none;

  ${props =>
    props.sm &&
    css`
      display: inline-flex;
      width: auto;
      padding: 10px 15px;
      align-items: center;
      font-size: 1.4rem;
  `};

  ${props =>
    props.success &&
    css`
      background-color: ${({ theme }) => theme.bgSuccess};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bdSuccess};
      color: ${({ theme }) => theme.textSuccess};
  `};

  ${props =>
    props.danger &&
    css`
      background-color: ${({ theme }) => theme.bgDanger};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bdDanger};
      color: ${({ theme }) => theme.textDanger};
  `};

  ${props =>
    props.info &&
    css`
      background-color: ${({ theme }) => theme.bgInfo};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bdInfo};
      color: ${({ theme }) => theme.textInfo};
  `};

  &:hover {
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: auto;
    &:hover {
      transform: none;
    }
  }
`;

export default Button;
