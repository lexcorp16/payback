import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import requests from "./requests";
import * as requestActions from "./requests";
import beneficiaries from "./beneficiaries";
import * as beneficiaryActions from "./beneficiaries";
import users from "./users";
import * as userActions from "./users";

// Reducers
export const rootReducer = combineReducers({
  router: routerReducer,
  requests,
  beneficiaries,
  users
});

// Action Creators
export const actions = {
  ...requestActions,
  ...beneficiaryActions,
  ...userActions
};

// Sagas
// export const rootSaga = {};
