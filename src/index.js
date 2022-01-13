import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
