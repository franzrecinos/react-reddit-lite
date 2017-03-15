import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Reddits } from '../containers/Reddits';

const subreddits = [
  {
    data: {
      id: 1,
      title: 'title 1',
      url: 'http://reddit.com',
      public_description: 'Lorem ipsum 1',
    },
  },
  {
    data: {
      id: 2,
      title: 'title 2',
      url: 'http://reddit.com',
      public_description: 'Lorem ipsum 2',
    },
  },
];

describe('Component: Reddits', () => {
  it('renders a container for a list of subreddits', () => {
    const wrapper = shallow(<Reddits reddits={subreddits} token={'abx123'} dispatch={() => {}} />);
    expect(wrapper.find('.reddit-list-three')).to.have.length(1);
  });
});