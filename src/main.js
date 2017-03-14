// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './styles/core.scss';

render(
    <App />,
  document.getElementById('root'),
);
