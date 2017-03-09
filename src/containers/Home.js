
import React, { Component } from 'react';
//import './Home.scss';
import Header from '../components/Header';

export default class Home extends Component {
  render() {
    return (
    <div className="demo-layout-waterfall mdl-layout mdl-js-layout">
      <Header></Header>
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--4-offset"></div>
          </div>
        </div>
      </main>
    </div>
    );
  }
}
