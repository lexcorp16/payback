import React from "react";

import { Container, Page } from "./../../components";

import LoginForm from "./LoginForm";

const LoginPage = props => {
  return (
    <Page>
      <Container xs pt={9}>
        <LoginForm {...props} />
      </Container>
    </Page>
  );
};

export default LoginPage;
