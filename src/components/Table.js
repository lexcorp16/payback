import styled, { css } from "styled-components";

const Table = styled.table`width: 100%;`;

export const Th = styled.th`
  padding: 20px 20px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.bg};
`;

export const Td = styled.td`
  padding: 20px 20px;
  text-align: left;
  border-bottom: 1px solid #eee;
  vertical-align: middle;
  ${props =>
    props.sm &&
    css`
        padding: 10px 20px;
      `};
`;

export const Tr = styled.tr`
  tbody & {
    transition: background-color 300ms;
    &:hover {
      ${props =>
        props.link &&
        css`
        background-color: #fafafa;
        cursor: pointer;
      `};
    }
  }
`;

export default Table;
