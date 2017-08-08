import React from "react";
import { Route, Switch } from "react-router-dom";

import { Page, Main } from "../components";

import { Sidebar } from "./_common";
import Requests from "./requests";
import Beneficiaries from "./beneficiaries";
import Users from "./users";
import Settings from "./settings";

export default props => {
  return (
    <Page>
      <Sidebar />
      <Main>
        <Switch>
          <Route
            path="/requests"
            render={routerProps => <Requests {...props} />}
          />
          <Route
            path="/beneficiaries"
            render={routerProps => <Beneficiaries {...props} />}
          />
          <Route path="/users" render={routerProps => <Users {...props} />} />
          <Route
            path="/settings"
            render={routerProps => <Settings {...props} />}
          />
        </Switch>
      </Main>
    </Page>
  );
};
