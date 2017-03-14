import React from 'react';
import { render, mount } from 'enzyme';
import { expect } from 'chai';

import { Subreddits } from '../containers/Subreddits';

describe('Component: Subreddits', () => {
  const subreddits = [
    {data: { id:'one'} },
    {data: { id:'two'} },
    {data: { id:'three'} },
  ];
  it('renders a list of subreddits', () => {
    const wrapper = mount(<Subreddits subreddits={subreddits} />);
    //const subredditsList = wrapper.find('.reddit-list-three li');
    expect(wrapper.props.className).to.equal('reddit-list-three');
  });
  // it('has a list of subreddits', () => {
  //   const wrapper = mount(<Subreddits />);
  //   const subredditsList = wrapper.find('.reddit-list-three li');
  //   expect(subredditsList).to.have.length(>0);
  // });
});