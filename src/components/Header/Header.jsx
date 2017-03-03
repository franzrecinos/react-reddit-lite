import React, { Component } from 'react';
// import './Header.scss';

export default class Header extends Component {
  render() {
    return (
        <header className="mdl-layout__header">
          <div className="mdl-layout-icon"></div>
          <div className="mdl-layout__header-row">
            <span className="mdl-layout__title">Reddit Lite Demo</span>
            <div className="mdl-layout-spacer"></div>
          </div>
        </header>
    );
  }
}
