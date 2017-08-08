import React from "react";

import { NavLink } from "react-router-dom";
import Icon from "../../assets/icon.png";
import {
  Avatar,
  H1,
  Profile,
  ProfileDetail,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarItem,
  Image
} from "./../../components";

export default () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Image src={Icon} alt="logo" height="24px" />
        <H1 ml={3} fontSize={3} color="textInfo" bold>
          payback
        </H1>
      </SidebarHeader>
      <Profile>
        <Avatar mr={3} />
        <ProfileDetail>Shola Akinlade</ProfileDetail>
      </Profile>
      <SidebarMenu>
        <NavLink to="/requests">
          <SidebarItem>Requests</SidebarItem>
        </NavLink>
        <NavLink to="/beneficiaries">
          <SidebarItem>Beneficiaries</SidebarItem>
        </NavLink>
        <NavLink to="/users">
          <SidebarItem>Users</SidebarItem>
        </NavLink>
        <NavLink to="/settings">
          <SidebarItem>Settings</SidebarItem>
        </NavLink>
      </SidebarMenu>
      <NavLink to="/" exact>
        <SidebarItem docked>Sign Out</SidebarItem>
      </NavLink>
    </Sidebar>
  );
};
