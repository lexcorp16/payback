import styled, { css } from "styled-components";

export default styled.div`
  width: 275px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  box-shadow: 0 2px 15px 0 rgba(9, 165, 219, 0.08);
  z-index: 999;
`;

export const SidebarHeader = styled.div`
  width: 100%;
  padding: 25px 30px;
  /* box-shadow: 0 2px 10px 0 rgba(9, 165, 219, 0.10);*/
  border-bottom: 1px solid ${({ theme }) => theme.bdInfoLight};
  display: flex;
  alighn-items: center;
`;

export const SidebarMenu = styled.div`margin-top: 30px;`;

export const SidebarItem = styled.div`
  width: 100%;
  padding: 30px;
  color: ${({ theme }) => theme.textSecondary};
  transition: all 200ms;
  position: relative;
  display: flex;
  align-items: center;
  &:after {
    content: "";
    position: absolute;
    width: 75%;
    height: 1px;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.bdInfoLight};
  }
  &:before {
    width: 1px;
    height: 100%;
    content: "";
    left: 0;
    top: 0;
    position: absolute;
    transition: all 300ms ease-in-out;
    background-color: ${({ theme }) => theme.bgPrimary};
  }
  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
  .active & {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: bold;
    &:before {
      transform: scaleX(9);
      opacity: 1;
    }
  }
  ${props =>
    props.docked &&
    css`
      background-color: ${({ theme }) => theme.bgMuted};
      position: absolute;
      bottom: 0;
      left: 0;
      cursor: pointer;
      &:before {
        display: none;
      }
  `};
`;
