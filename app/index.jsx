import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './styles/scss/index.scss';

import App from './containers/App';

render(
  <App />,
  document.getElementById('app'),
);
