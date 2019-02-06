import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Bring in Provider component from react-redux, which essentially ties our react app to our root App component
import { createStore } from "redux"; // A method that creates a Redux Store, the state that goes into the store comes from the combined reduces that we import from reducers

import App from "./components/App";
import reducers from "./reducers"; // Import the reducers file, which essentially holds our state and then we use this import to pass our state into the store.

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
