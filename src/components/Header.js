import React, { Component } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter';

export default class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header mdl-layout__header--waterfall">

        <div className="mdl-layout__header-row">

          <span className="mdl-layout-title">Reddit Lite Demo</span>
          <div className="mdl-layout-spacer"></div>
          <Search></Search>
        </div>

        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <Filter></Filter>
        </div>
      </header>
    );
  }
}
