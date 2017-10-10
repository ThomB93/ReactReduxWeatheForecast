import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import App from "./components/app";
import reducers from "./reducers";

//apply middleware to extract data from promise before sending to reducer
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); //pass actions through middleware before they are sent to reducers

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
