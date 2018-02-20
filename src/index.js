import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import RouterContainer from "./RouterContainer";

import "./index.css";

import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, createLogger())
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <RouterContainer />
  </Provider>,
  document.getElementById("root")
);
