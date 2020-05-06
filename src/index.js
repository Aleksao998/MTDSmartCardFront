import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import throttle from "lodash.throttle";
// styles
import "assets/css/bootstrap.min.css";

import "./styles/style.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

//Redux store
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

//LocalStorage
import { saveStore } from "./localStorage/localStorage";

//Router
import AppRoutes from "./routers/routers";

const store = configureStore();

store.subscribe(
  throttle(() => {
    saveStore(store.getState());
  }, 1000)
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRoutes store={store} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
