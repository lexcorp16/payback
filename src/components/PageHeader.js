import React from "react";

import Container from "../components/Container";
import Profile from "../components/Profile";
import ProfileMenu from "../components/ProfileMenu";
import ProfileMenuList from "../components/ProfileMenuList";
import ProfileMenuItem from "../components/ProfileMenuItem";
import Avatar from "../components/Avatar";
import Header from "../components/Header";
import Flex from "../components/Flex";

const PageHeader = () => {
  return (
    <Header>
      <Container height="100%">
        <Flex height="100%">
          <Text color="#658cb1">Paystack DRS</Text>
          <Profile>
            <Avatar />
            <ProfileMenu>
              <ProfileMenuList>
                <ProfileMenuItem>Logout</ProfileMenuItem>
              </ProfileMenuList>
            </ProfileMenu>
          </Profile>
        </Flex>
      </Container>
    </Header>
  );
};

export default PageHeader;
