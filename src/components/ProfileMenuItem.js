import styled from "styled-components";

const ProfileMenuItem = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid #dfe7ef;
  color: #252526;
  text-align: center;
  transition: background-color 300ms;
  border-radius: 3px;
  background-color: white;
  min-width: 150px;

  &:hover {
    background-color: #f2f5f9;
    border-radius: 3px;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default ProfileMenuItem;
