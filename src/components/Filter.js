import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Hot</a>
        <a className="mdl-navigation__link" href="">New</a>
        <a className="mdl-navigation__link" href="">Rising</a>
        <a className="mdl-navigation__link" href="">Top</a>
      </nav>
    );
  }
}
