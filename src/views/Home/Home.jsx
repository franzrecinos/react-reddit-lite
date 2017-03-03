import React, { Component } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';

export default class Home extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header></Header>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset"></div>
        </div>
      </div>
    );
  }
}
