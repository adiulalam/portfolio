import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN_NAME}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={`${window.location.origin}/#/admin`}
    // redirectUri={
    //   process?.env?.REACT_APP_ENV === "local"
    //     ? "http://localhost:3000/#/admin"
    //     : "adiulalamadil.me/#/admin"
    // }
    audience="hasura"
  >
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
