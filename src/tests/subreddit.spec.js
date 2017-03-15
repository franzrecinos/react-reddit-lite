import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Subreddits } from '../containers/Subreddits';

const subredditPosts = [
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

describe('Component: Subreddits', () => {
  it('renders a container for a list of subreddits posts from a specific channel', () => {
    const wrapper = shallow(<Subreddits subredditPosts={subredditPosts}
                                       token={'abx123'}
                                       dispatch={() => {}}
                                       interval={0}
                                       subreddit={'r/movies'} />);
    expect(wrapper.find('.posts-list-three')).to.have.length(1);
  });
});