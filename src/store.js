import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";

import { rootReducer } from "./ducks";

// Mock data
import requests from "./data/requests";
import beneficiaries from "./data/beneficiaries";
import users from "./data/users";

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  requests,
  beneficiaries,
  users
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(rootSaga);

export default store;
