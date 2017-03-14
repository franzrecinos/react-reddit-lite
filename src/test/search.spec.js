import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import { Search } from '../components/Search';

describe('Component: Search', () => {
  it('has an input for reddit search', () => {
    const wrapper = render(<Search token={'abx123'} dispatch={() => {}} />);
    expect(wrapper.find('input')).to.have.length(1);
  });
});