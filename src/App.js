import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "./ducks";
import { mergeProps } from "./utils";
import LoginPage from "./modules/login";
import ModulesBasePage from "./modules";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route
          path="/"
          render={routerProps =>
            <ModulesBasePage {...mergeProps(routerProps, this.props)} />}
        />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    requests: state.requests,
    beneficiaries: state.beneficiaries,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
