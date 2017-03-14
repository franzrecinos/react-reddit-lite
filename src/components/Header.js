// @flow
import React, { Component } from 'react';
import Search from '../components/Search';

export default class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Reddit Lite Demo</span>
          <div className="mdl-layout-spacer"></div>
          <Search />
        </div>
      </header>
    );
  }
}
