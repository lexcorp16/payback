import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import { Div, Button, Flex } from "../../components";
import RequestsList from "./RequestsList";
import SingleRequest from "./SingleRequest";
import SingleRequestEmpty from "./SingleRequestEmpty";

export default props => {
  this.propTypes = {
    requests: PropTypes.array.isRequired
  };

  return (
    <Div width="50%" px={4} py={4}>
      <Flex mb={3}>
        <Button sm>New Request</Button>
      </Flex>
      <RequestsList requests={props.requests} />
      <Switch>
        <Route path="/requests" exact component={SingleRequestEmpty} />
        <Route
          path="/requests/:id"
          exact
          render={({ match }) => renderRequest(match, props.requests)}
        />
      </Switch>
    </Div>
  );
};

function renderRequest(match, requests) {
  const request = requests.find(req => "" + req.id === match.params.id);
  return <SingleRequest {...request} />;
}
