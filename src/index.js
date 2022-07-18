import React from 'react';
import ReactDOM from 'react-dom';
import { PortfolioProvider } from './context/portfolio';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import * as serviceWorker from './serviceWorker';

// const content= require('./content')

// console.log("here", content);

ReactDOM.render(
  <Provider store={store}>
    <PortfolioProvider>
      <Router>
        <App />
      </Router>
    </PortfolioProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
