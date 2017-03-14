import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { expect } from 'chai';

import { App } from '../containers/App';

describe('Component: App', () => {
  it('renders OK', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App dispatch={() => {}} token={'abx123'}/>, div);
  });
});