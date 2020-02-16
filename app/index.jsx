import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './styles/scss/index.scss';

import App from './containers/App';

render(
  <App />,
  document.getElementById('app'),
);
