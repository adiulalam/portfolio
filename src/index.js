import React from "react";
import ReactDOM from "react-dom";
import { PortfolioProvider } from "./context/portfolio";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import ContentObjects from "./content";

// const content= require('./content')

// console.log("here", content);

ReactDOM.render(
  <PortfolioProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </PortfolioProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
