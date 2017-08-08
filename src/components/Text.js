import styled, { css } from "styled-components";
import { space, fontSize, color } from "styled-system";

const align = css`
  text-align: ${props =>
    (props.align === "center" && "center") ||
    (props.align === "right" && "right")};
`;

const weight = css`
  font-weight: ${props =>
    (props.bold && "700") ||
    (props.semiBold && "600") ||
    (props.normal && "400")};
`;

const Text = styled.div`
  font-size: 1.6rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.textPrimary};
  ${align};
  ${weight};
  ${fontSize};
  ${space};
  ${color};
`;

export const H1 = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textPrimary};
  ${align};
  ${weight};
  ${space};
  ${color};
  ${fontSize};
`;

export const H2 = styled.h2`
  font-size: 2.1rem;
  color: ${({ theme }) => theme.textPrimary};
  ${align};
  ${weight};
  ${space};
  ${color};
  ${fontSize};
`;

export const H3 = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.textPrimary};
  ${align};
  ${weight};
  ${space};
  ${color};
  ${fontSize};
`;

export const H4 = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textPrimary};
  ${align};
  ${weight};
  ${space};
  ${color};
  ${fontSize};
`;

export default Text;
