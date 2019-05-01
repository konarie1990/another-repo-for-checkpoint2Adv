import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Router from "./router";
import store from "./store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
);

export default App;
