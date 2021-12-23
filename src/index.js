import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";

import Reducer from "../src/redux/reducers/reducers";
const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/* import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
 */
