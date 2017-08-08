import styled, { css } from "styled-components";
import { space } from "styled-system";

const Label = styled.div`
  ${space};
  padding: 5px 10px;
  font-size: 1.2rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.bgPrimary};
  color: white;
  appearance: none;
  transition: all 300ms;
  outline: none;
  opacity: 0.75;
  display: inline-block;
  font-weight: 600;

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

  ${props =>
    props.warning &&
    css`
      background-color: ${({ theme }) => theme.bgWarning};
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bdWarning};
      color: ${({ theme }) => theme.textWarning};
  `};
`;

export default Label;
