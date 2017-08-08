import styled from "styled-components";
import Profile from "./Profile";

const ProfileMenu = styled.div`
  position: absolute;
  z-index: 4;
  top: 100%;
  right: 0;
  padding: 8px 0;
  transition: transform 200ms, opacity 200ms;
  pointer-events: none;
  opacity: 0;
  transform: translateY(-8px);
  ${Profile}:hover & {
    pointer-events: auto;
    opacity: 1;
    transform: translateY(0);
  }
`;

export default ProfileMenu;
