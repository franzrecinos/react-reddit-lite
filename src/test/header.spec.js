import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import ConnectedSearch, { Search } from '../components/Search';


describe('Component: Search', () => {

  it('should have an input for reddit search', () => {
    const wrapper = mount(<Search />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  // it('should have state defined for isExpanded, expandedClass and searchTerm', function () {
  //   const wrapper = shallow(<Search/>);
  //   expect(wrapper.state.isExpanded).to.be.defined;
  //   expect(wrapper.state.expandedClass).to.be.defined;
  //   expect(wrapper.state.searchTerm).to.be.defined;
  // });
});