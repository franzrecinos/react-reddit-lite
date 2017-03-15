import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../containers/App';

describe('Component: App', () => {
  it('renders OK', () => {
    shallow( <App token={'abc123'} search={'movies'} />);
  });
});